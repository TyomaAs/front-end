import { useState, useEffect } from "react";

const LectureText = ({ text, order, type, length, edit = false, onChange, onDelete, onOrderChange }) => {
  const [textValue, setTextValue] = useState(text);
  const [orderValue, setOrderValue] = useState(order);

  useEffect(() => {
    setTextValue(text);
  }, [text]);

  useEffect(() => {
    setOrderValue(order);
  }, [order]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleOrderInput = (e) => {
    const newOrder = e.target.value;
    setOrderValue(newOrder);
    if (onOrderChange) onOrderChange(newOrder);
  };

  return (
    <li className="lecture__block">
      {!edit ? (
        <div className={"lecture__" + type}>
          {type !== "image" && textValue}
          {type === "image" && <img src={textValue} alt={textValue} />}
        </div>
      ) : (
        <div className="lecture__form">
          
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={onDelete}
          >
            
            Delete
          </button>
          <input
            type="number"
            className="lecture__form-input order"
            value={orderValue}
            placeholder="Order"
            onChange={handleOrderInput}
            min={1}
            max={length}
          />
          <label htmlFor="lectureText" className="lecture__form-label">
            {type}
          </label>
          {type !== "text" && <input
            type="text"
            id="lectureText"
            name="lectureText"
            className="lecture__form-input"
            value={textValue}
            onChange={handleChange}
            required
          />}
          {type === "text" && <textarea
            type="text"
            id="lectureText"
            name="lectureText"
            className="lecture__form-input"
            value={textValue}
            onChange={handleChange}
            required
          />}
          {type === "image" && 
            <div className="lecture__form-image">
              <img src={textValue} alt={textValue} />
            </div>}
        </div>
      )}
    </li>
  );
};

export default LectureText;
