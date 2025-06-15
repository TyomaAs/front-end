import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

import notFound from '../../assets/ico/not-found-block.svg';
import LessonCard from "../../components/cardLesson.jsx";
import { courses, lessons, user } from "../../data/data.js";


const LessonPage = () => {
  const { id, lessonId } = useParams();

  const [course, setCourse] = useState(null);
	const [courseLessons, setCourseLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const selectedCourse = courses.find(c => c.id === id);
    if (selectedCourse) {
      setCourse(selectedCourse);
      const courseLessons = lessons.filter(l => l.courseId === id);
      setCourseLessons(courseLessons);
    } else {
      setCourse(null);
    }

    setLoading(false);
  }, [id]);


  if (loading) return <div>Завантаження...</div>;
  if (!course) return <Navigate to="/not-found" replace />;

  const selectedLesson = courseLessons.find(l => l.id === lessonId);

  return (
    <div className="courses__page">
      <div className="container">

        <h1 className="courses__title">Course name: "{course.title}". Lesson</h1>
        <div className="courses__nav">
          <Link to={`/course/${id}/`} className="link brd card-small__button back">Back to course</Link>
        {user.id === course.idCreator && <Link to={`/course/${id}/lesson/${lessonId}/edit`} className="link brd card-small__button back">Edit lesson</Link>}
        {user.id === course.idCreator && <Link to={`/course/${id}/lesson/${lessonId}/delete`} className="link brd card-small__button back">Delete lesson</Link>}

        </div>
        {selectedLesson ? (
          <LessonCard
            id={selectedLesson.id}
            title={selectedLesson.title || "Not Found"}
            courseId={id}
            description={selectedLesson.description || "Magic frogy forget get name for lesson"}
            image={selectedLesson.image || notFound}
            button={true}
          />
        ) : (
          <LessonCard
            id='not-found'
            title="Not found"
            courseId={id}
            description="Magic frogy forget get name for lesson"
            image={notFound}
            button={false}
          />
        )}
				
      </div>
    </div>
  );
};

export default LessonPage;
