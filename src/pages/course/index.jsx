import React, { useState } from "react";
import CourseCard from "../../components/card.jsx"; // Adjust the import path as necessary
import NotFound from '../../assets/ico/not-found.svg?url'; // Adjust the import path as necessary


const CoursesPage = () => {
  const [courses, setCourses] = useState([
    {
      id: "1",
      title: "Intro to React",
      description: "Learn the basics of React, JSX and components!",
      avatar: "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
      creatorId: 1,
      category: "frontend"
    },
    {
      id: "2",
      title: "Backend Magic",
      description: "Dive into Node.js, Express and APIs.",
      avatar: "https://i.pinimg.com/736x/5a/41/0a/5a410a3a52f621aae271e26f6c732512.jpg",
      creatorId: "3",
      category: "backend"
    },
  ]);

  return (
    <div className="courses__page">
      <div className="container">
      <h2 className="courses__title">Courses</h2>
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
              image={course.avatar}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default CoursesPage;
