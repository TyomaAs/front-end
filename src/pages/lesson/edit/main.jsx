import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { lessons, courses, user as currentUser } from "../../../data/data.js";

const EditLessonPage = () => {
  const { id: courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Знаходимо курс і урок
    const foundCourse = courses.find(c => c.id === courseId);
    const foundLesson = lessons.find(l => l.id === lessonId);

    if (!foundCourse) {
      setError("Course not found.");
      setLoading(false);
      return;
    }
    if (!foundLesson) {
      setError("Lesson not found.");
      setLoading(false);
      return;
    }
    if (foundCourse.idCreator !== currentUser.id) {
      setError("You do not have permission to edit this lesson.");
      setLoading(false);
      return;
    }

    setCourse(foundCourse);
    setLesson({ ...foundLesson });
    setLoading(false);
  }, [courseId, lessonId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLesson(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const index = lessons.findIndex(l => l.id === lessonId);
    if (index !== -1) {
      lessons[index] = { ...lesson };
      console.log("✅ Lesson updated:", lessons[index]);
      alert("Lesson updated successfully!");
      navigate(`/course/${courseId}/lesson/${lessonId}`);
    } else {
      alert("Lesson not found in data!");
    }
  };


  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return (
    <div className="alert alert-danger text-center mt-5" role="alert">
      {error}
    </div>
  );

  return (
    <div className="container mt-5 mb-5">
      <Link
        to={`/course/${courseId}/lesson/${lessonId}`}
        className="link brd card-small__button back"
      >
        Back to lesson
      </Link>

      <h2 className="text-white mb-4">Edit Lesson: "{lesson.title}"</h2>

      {currentUser.id === course.idCreator && <form onSubmit={handleSubmit} className="d-flex flex-column gap-3" style={{ maxWidth: "600px" }}>
        <div>
          <label htmlFor="title" className="form-label fw-semibold text-white">Lesson Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control rounded-3"
            value={lesson.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="form-label fw-semibold text-white">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="form-control rounded-3"
            value={lesson.description || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="image" className="form-label fw-semibold text-white">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            className="form-control rounded-3"
            value={lesson.image || ""}
            onChange={handleChange}
          />
        </div>

        {lesson.image && (
          <div className="text-center text-white mt-3">
            <img
              src={lesson.image}
              alt="Lesson"
              className="img-thumbnail rounded shadow-sm"
              style={{ maxHeight: "200px" }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-4 w-100 rounded-3">
          💾 Save Changes
        </button>
      </form>}
    </div>
  );
};

export default EditLessonPage;
