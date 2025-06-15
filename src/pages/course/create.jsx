import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { courses, user as currentUser } from "../../data/data.js";

const CreateCoursePage = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    title: "",
    description: "",
    image: "",
    idCreator: currentUser.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = String(Date.now()); // простий унікальний ID (можна UUID пізніше)
    const newCourse = { ...course, id: newId };

    // логіка додавання (у справжньому апі — POST-запит)
    courses.push(newCourse);

    // 🖨️ Вивід в консоль для перевірки
    console.log("🆕 Created course:");
    console.log(JSON.stringify(newCourse, null, 2));
    console.log("📚 Всі курси тепер:", courses);

    alert("Course created successfully!");

    // можна не переходити, просто для перевірки залишити тут:
    // navigate(`/course/${newId}`);
  };

  return (
    <div className="container mb-5">
      <h1 className="courses__title">Create a New Course</h1>

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <Link to="/course" className="link brd card-small__button back">Back to courses</Link>
        
        <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
          <h3 className="text-center mb-4 text-white">New Course</h3>

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
                  alt="Course preview"
                  className="img-thumbnail mt-2 rounded shadow-sm"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            )}

            <button type="submit" className="btn btn-success mt-3 w-100 rounded-3">
              ➕ Create Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
