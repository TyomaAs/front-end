import React, { useState } from "react";
import { Link } from "react-router-dom";


import CourseCard from "../../components/card.jsx"; // Adjust the import path as necessary
import NotFound from '../../assets/ico/not-found.svg?url'; // Adjust the import path as necessary
import { courses, user } from "../../data/data.js";


const CoursesPage = () => {


  return (
    <div className="courses__page">
      <div className="container">
      <h1 className="courses__title">Courses</h1>
      {(user.role === "teacher" || user.role === "admin") && <div className="courses__nav">
        <Link to={`/course/create`} className="link brd card-small__button back">Create course</Link>

        </div>}
      {courses.length === 0 ? (
				<div className="courses__list not-found">
					<CourseCard 
						id={-1}
						title="Not found"
						description="Please try later. The magic frogy is repairing it. 🐸"
						image={NotFound}
					/>
				</div>
      ) : (
        <div className="courses__list">
          {courses.map((course) => (
            <CourseCard
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default CoursesPage;
