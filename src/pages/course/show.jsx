import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

import notFound from '../../assets/ico/not-found-block.svg';
import certificate from '../../assets/ico/certificate.svg';
import CourseCard from "../../components/card.jsx"; // Adjust the import path as necessary
import LessonCard from "../../components/cardSmall.jsx"; // Adjust the import path as necessary
import { courses, lessons, user } from "../../data/data.js";

const CoursePage = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(true);
	const [completed, setCompleted] = useState(false);
	const [isClicked, setClicked] = useState(false);

  useEffect(() => {

    const selectedCourse = courses.find(c => c.id === id);
    if (selectedCourse) {
      setCourse(selectedCourse);
      const courseLessons = lessons.filter(l => l.courseId === id);
      setLesson(courseLessons);
    } else {
      setCourse(null);
    }

    setLoading(false);
  }, [id]);
	
	useEffect(() => {
		if (isClicked) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [isClicked]);
	const handleDeleteCourse = () => {
		console.log(`⛔ Видаляємо курс з id = ${id}`);

		// Це лише симуляція, реального видалення з імпортованого масиву не буде
		const remainingCourses = courses.filter(c => c.id !== id);
		console.log("📦 Курси після видалення:", remainingCourses);

		// "Видаляємо" курс з інтерфейсу
		setCourse(null);
	};
  if (loading) return <div>Завантаження...</div>;
	if (!course) return <Navigate to="/not-found" replace />;

	const fullscreen = () => setClicked(!isClicked);

	let lessonNumber = 0;
  return (
    <div className="courses__page">
			<div className="container">
				{course && <h1 className="courses__title">Course name: "{course.title}"</h1>}

				<div className="courses__nav">
				<Link to={`/course/`} className="link brd card-small__button back">Back to courses</Link>
					{user.id === course.idCreator && <Link to={`/course/${id}/lesson/create`} className="link brd card-small__button back">Create lesson</Link>}
					{user.id === course.idCreator && <Link to={`/course/${id}/edit`} className="link brd card-small__button back">Edit course</Link>}
					{user.id === course.idCreator && 
					<button 
						onClick={() => handleDeleteCourse()}
						className="link brd card-small__button back bg-danger text-white"
					>
						Delete course
					</button>}
				</div>
				<CourseCard 
					id={id}
					title="About course"
					description={course.description}
					image={course.image || notFound}
				/>
      <ul className="courses__lessons">
        {lesson.map(lesson => (
					<LessonCard 
						id={lesson.id}
						key={lesson.id}
						courseId={id}
						title={lesson.title || "Magic frogy forget to get name for lesson"}
						image={lesson.image || notFound}
						number={lessonNumber++}
					/>
        )
				)}
      </ul>
				{completed ? (
					<div className="course__certificate">
						<div className="course__certificate-image">
							<img src={certificate} alt={certificate} />
						</div>
						<div className="course__certificate-hint">
							Complete all lessons to get certificate :3 
						</div>
						<Link to={`/course/${id}/certificate`} onClick={fullscreen} className={`course__certificate-button link brd ${isClicked ? "_active" : ""}`}>Already complete</Link>
					</div>
				) : (
					<div className="course__certificate">
						<div className="course__certificate-image">
							<img src={certificate} alt={certificate} />
						</div>
						<div className="course__certificate-hint">
							Complete all lessons to give this (т_т")
						</div>
						<div onClick={fullscreen} className={`course__certificate-button link brd ${isClicked ? "_active" : ""}`}>You're can't... (т_т*)</div>
					</div>
				)}
    </div>
  </div>
  );
};

export default CoursePage;
