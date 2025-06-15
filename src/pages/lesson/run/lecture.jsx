import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import LectureText from "../../../components/lectureText";
import { user, courses, lessons, lecture } from "../../../data/data.js";

const LecturePage = () => {
  const { id: courseId, lessonId } = useParams(); // ⬅️ витягуємо courseId
  const [lectureBlocks, setLectureBlocks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const filtered = lecture
      .filter((block) => String(block.lessonId) === lessonId)
      .sort((a, b) => a.order - b.order);

    setLectureBlocks(filtered);

    // знайти курс
    const foundCourse = courses.find(c => c.id === courseId);
    setCourse(foundCourse);
  }, [lessonId, courseId]);

  const handleTextChange = (index, newValue) => {
    setLectureBlocks((prev) =>
      prev.map((block, i) =>
        i === index ? { ...block, content: newValue } : block
      )
    );
  };

	const handleAddBlock = (type) => {
		const newBlock = {
			id: Date.now(), // тимчасовий унікальний ID
			lessonId: Number(lessonId),
			order: lectureBlocks.length + 1,
			type,
			content: "",
			image: null,
		};
		setLectureBlocks((prev) => [...prev, newBlock]);
	};
	const handleDeleteBlock = (index) => {
		setLectureBlocks((prev) => prev.filter((_, i) => i !== index));
	};

	const handleOrderChange = (index, newOrderRaw) => {
		  let newOrder = Number(newOrderRaw);
			if (isNaN(newOrder) || newOrder < 1) newOrder = 1;
			if (newOrder > lectureBlocks.length) newOrder = lectureBlocks.length;
			setLectureBlocks((prev) => {
			const oldOrder = prev[index].order;
			if (oldOrder === newOrder) return prev;

			return prev.map((block) => {
				if (block.id === prev[index].id) {
					// змінюємо порядок вибраного блоку
					return { ...block, order: newOrder };
				}
				// якщо новий порядок більше за старий, зсуваємо блоки між oldOrder+1 і newOrder вліво (order - 1)
				if (newOrder > oldOrder) {
					if (block.order > oldOrder && block.order <= newOrder) {
						return { ...block, order: block.order - 1 };
					}
				}
				// якщо новий порядок менший за старий, зсуваємо блоки між newOrder і oldOrder-1 вправо (order + 1)
				if (newOrder < oldOrder) {
					if (block.order >= newOrder && block.order < oldOrder) {
						return { ...block, order: block.order + 1 };
					}
				}
				return block;
			}).sort((a, b) => a.order - b.order);
		});
	};


  return (
    <div className="container mt-5 mb-5">
			{lessons[lessonId] && <h1 className="courses__title">{lessons[lessonId].title}</h1>}


      <div className="courses__nav">
        <Link
          to={`/course/${courseId}/lesson/${lessonId}`}
          className="link brd card-small__button back"
        >
          Back to lesson
        </Link>

        {course && user.id === course.idCreator && (
          <button
							className="link brd card-small__button back"
							onClick={() => setEditMode((prev) => !prev)}

						>
							{editMode ? "Disable Editing X" : "Enable Editing"}
						</button>
					)}
					
				</div>
				{editMode && course && user.id === course.idCreator && (
					<div className="courses__nav">
						<button
							className="link brd card-small__button back"
							onClick={() => handleAddBlock("text")}
						>
							Add text
						</button>
						<button
							className="link brd card-small__button back"
							onClick={() => handleAddBlock("header")}
						>
							Add header
						</button>
						<button
							className="link brd card-small__button back"
							onClick={() => handleAddBlock("quote")}
						>
							Add quote
						</button>
						<button
							className="link brd card-small__button back"
							onClick={() => handleAddBlock("image")}
						>
							Add image
						</button>
					</div>
				)}


      <ul className="lecture">
        {lectureBlocks.map((block, index) => {
					return (
						<LectureText
							key={block.id}
							text={block.content}
							edit={editMode}
							order={block.order}
							type={block.type}
							onChange={(newValue) => handleTextChange(index, newValue)}
							onDelete={() => handleDeleteBlock(index)}
							onOrderChange={(newOrder) => handleOrderChange(index, newOrder)}
							length={lectureBlocks.length}

						/>
					);
				})}
        
			{!editMode && (
				<Link
					to={`/course/${courseId}/lesson/${lessonId}/game`}
					className="link brd card-small__button lecture__button"
				>
					Go to the game
				</Link>
			)}
      </ul>
    </div>
  );
};

export default LecturePage;
