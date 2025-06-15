import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { lessons, courses, user as currentUser } from "../../../data/data.js";

const CreateLessonPage = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    courseId: courseId
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === courseId);
    if (!foundCourse) {
      setError("Course not found.");
      setLoading(false);
      return;
    }
    if (foundCourse.idCreator !== currentUser.id) {
      setError("You do not have permission to add lessons to this course.");
      setLoading(false);
      return;
    }

    setCourse(foundCourse);
    setLoading(false);
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLesson(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Генеруємо новий ID (псевдо, бо нема бази)
    const newLesson = {
      ...lesson,
      id: (lessons.length + 1).toString()
    };

    // Додаємо в масив (симуляція)
    lessons.push(newLesson);

    console.log("✅ New lesson created:", newLesson);
    alert("Lesson created successfully!");

    // Переходимо до курсу або нового уроку
    navigate(`/course/${courseId}`);
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
        to={`/course/${courseId}`}
        className="link brd card-small__button back mb-4"
      >
        Back to course
      </Link>

      <h2 className="text-white mb-4">Create New Lesson</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3" style={{ maxWidth: "600px" }}>
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
            value={lesson.description}
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
            value={lesson.image}
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

        <button type="submit" className="btn btn-success mt-4 w-100 rounded-3">
          ➕ Create Lesson
        </button>
      </form>
    </div>
  );
};

export default CreateLessonPage;
