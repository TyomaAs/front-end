import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { user, courses, lessons, gameBlocks } from "../../../data/data.js";
import GameFillBlank from "../../../components/game/GameFillBlank";
import GameSingleChoice from "../../../components/game/GameSingleChoice";
import GameMatchPairs from "../../../components/game/GameMatchPairs";

const GamePage = () => {
  const { id: courseId, lessonId } = useParams();
  const [blocks, setBlocks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const filtered = gameBlocks
      .filter(b => String(b.lessonId) === lessonId)
      .sort((a, b) => a.order - b.order);
    setBlocks(filtered);
    const foundCourse = courses.find(c => c.id === courseId);
    setCourse(foundCourse);
  }, [lessonId, courseId]);

  const handleBlockChange = (index, newContent) => {
    setBlocks(prev =>
      prev.map((block, i) => (i === index ? { ...block, content: newContent } : block))
    );
  };

  const handleDeleteBlock = (index) => {
    setBlocks(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      lessonId: Number(lessonId),
      order: blocks.length + 1,
      type,
      content: {}, // залежно від типу
    };
    setBlocks(prev => [...prev, newBlock]);
  };
	const handleOrderChange = (index, newOrderRaw) => {
		let newOrder = Number(newOrderRaw);
		if (isNaN(newOrder) || newOrder < 1) newOrder = 1;
		if (newOrder > blocks.length) newOrder = blocks.length;
		setBlocks((prev) => {
			const oldOrder = prev[index].order;
			if (oldOrder === newOrder) return prev;

			return prev.map((block) => {
				if (block.id === prev[index].id) return { ...block, order: newOrder };
				if (newOrder > oldOrder && block.order > oldOrder && block.order <= newOrder) {
					return { ...block, order: block.order - 1 };
				}
				if (newOrder < oldOrder && block.order >= newOrder && block.order < oldOrder) {
					return { ...block, order: block.order + 1 };
				}
				return block;
			}).sort((a, b) => a.order - b.order);
		});
	};
  return (
    <div className="container mt-5 mb-5">
      <h1 className="courses__title">{lessons[lessonId].title}</h1>
      <div className="courses__nav">
        <Link to={`/course/${courseId}/lesson/${lessonId}`} className="link brd card-small__button back">Back to lesson</Link>
        {course && user.id === course.idCreator && (
          <button className="link brd card-small__button back" onClick={() => setEditMode(prev => !prev)}>
            {editMode ? "Disable editing X" : "Enable editing"}
          </button>
        )}
      </div>

      {editMode && (
        <div className="courses__nav">
          <button onClick={() => handleAddBlock("fillBlank")} className="link brd card-small__button back">Add Fill Blank</button>
          <button onClick={() => handleAddBlock("singleChoice")} className="link brd card-small__button back">Add Single Choice</button>
          <button onClick={() => handleAddBlock("matchPairs")} className="link brd card-small__button back">Add Matching</button>
        </div>
      )}

      <ul className="lecture">
        {blocks.map((block, index) => {
          const commonProps = {
            key: block.id,
            edit: editMode,
            order: block.order,
            content: block.content,
						length: blocks.length,
            onChange: (newContent) => handleBlockChange(index, newContent),
            onDelete: () => handleDeleteBlock(index),
						onOrderChange: (newOrder) => handleOrderChange(index, newOrder),

          };

          switch (block.type) {
            case "fillBlank":
              return <GameFillBlank {...commonProps} />;
            case "singleChoice":
              return <GameSingleChoice {...commonProps} />;
            case "matchPairs":
              return <GameMatchPairs {...commonProps} />;
            default:
              return null;
          }
        })}
      </ul>
    </div>
  );
};

export default GamePage;
