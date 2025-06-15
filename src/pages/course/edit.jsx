import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses, user as currentUser } from "../../data/data.js";

const EditCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const courseToEdit = courses.find((c) => c.id === id);

    if (!courseToEdit) {
      setError("Course not found.");
    } else if (courseToEdit.idCreator !== currentUser.id) {
      setError("You do not have permission to edit this course.");
    } else {
      setCourse({ ...courseToEdit });
    }

    setLoading(false);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated course:", course);
    alert("Course updated successfully!");
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="courses__title">Course name: "{course.title}"</h1>

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <Link to={`/course/${id}`} className="link brd card-small__button back">Back to course</Link>
        {currentUser.id === course.idCreator && <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>

          <h3 className="text-center mb-4 text-white">Edit Course</h3>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column gap-3"
            style={{ width: "100%" }}
          >
            <div>
              <label htmlFor="title" className="form-label fw-semibold text-white">
                Course Title
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                id="title"
                name="title"
                value={course.title}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="form-label fw-semibold text-white">
                Description
              </label>
              <textarea
                className="form-control rounded-3"
                id="description"
                name="description"
                rows="4"
                value={course.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="image" className="form-label fw-semibold text-white">
                Image URL
              </label>
              <input
                type="url"
                className="form-control rounded-3"
                id="image"
                name="image"
                value={course.image}
                onChange={handleChange}
              />
            </div>

            {course.image && (
              <div className="text-center text-white">
                <img
                  src={course.image}
                  alt="Course"
                  className="img-thumbnail mt-2 rounded shadow-sm"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-3 w-100 rounded-3">
              💾 Save Changes
            </button>
          </form>
        </div>}
      </div>
    </div>
  );
};

export default EditCoursePage;
