import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GameSingleChoice = ({ edit, content, onChange, length, onOrderChange, onDelete, order }) => {
  const [selectedId, setSelectedId] = useState(null); // для перегляду

  const handleTitleChange = (value) => {
    onChange({ ...content, title: value });
  };

  const handleOptionChange = (id, field, value) => {
    const newOptions = content.options.map(opt =>
      opt.id === id ? { ...opt, [field]: value } : opt
    );
    onChange({ ...content, options: newOptions });
  };

  const handleAddOption = () => {
    const newOption = { id: uuidv4(), text: "", correct: false };
    onChange({ ...content, options: [...content.options, newOption] });
  };

  const handleDeleteOption = (id) => {
    const newOptions = content.options.filter(opt => opt.id !== id);
    onChange({ ...content, options: newOptions });
  };

  const handleCorrectChange = (id) => {
    const newOptions = content.options.map(opt => ({
      ...opt,
      correct: opt.id === id
    }));
    onChange({ ...content, options: newOptions });
  };

  const handleSelectOption = (id) => {
		setSelectedId(id);
		onChange({ ...content, selected: id });
	};


  return (
    <li className="lecture__block">
      <h3 className="lecture__header">{order}. {content.title || "Single Choice Question"}</h3>

      <div className="lecture__form">
        {edit ? (
          <>
						<input
								type="number"
								className="lecture__form-input order"
								placeholder="Order"
								value={order}
								onChange={(e) => onOrderChange?.(e.target.value)}
								min={1}
								max={length}
							/>
            <input
              type="text"
              className="lecture__form-input"
              placeholder="Title"
              value={content.title}
              onChange={(e) => handleTitleChange(e.target.value)}
            />

            <ul className="lecture__options">
              {content.options.map(option => (
                <li key={option.id} className="lecture__form lecture__option-row">
                  <div
                    className={`custom-radio ${option.correct ? "selected" : ""}`}
                    onClick={() => handleCorrectChange(option.id)}
                  />
                  <input
                    type="text"
                    className="lecture__form-input"
                    placeholder="Option text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(option.id, "text", e.target.value)}
                  />
                  <button className="btn btn-secondary mt-2" onClick={() => handleDeleteOption(option.id)}>x</button>
                </li>
              ))}
            </ul>

            <button className="btn btn-warning mt-2" onClick={handleAddOption}>
              + Add Option
            </button>
            <button className="btn btn-danger mt-2" onClick={onDelete}>
              Delete Block
            </button>
          </>
        ) : (
          <div className="lecture__text">
            <ul className="lecture__options">
              {content.options.map(option => (
                <li
                  key={option.id}
                  className="lecture__option-row"
                  onClick={() => handleSelectOption(option.id)}
                >
                  <div className={`custom-radio ${selectedId === option.id ? "selected" : ""}`} />
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default GameSingleChoice;
