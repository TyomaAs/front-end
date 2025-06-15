const GameFillBlank = ({ edit, content, onChange, onDelete, order, length, onOrderChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...content, [field]: value });
  };

  // Нова функція для оновлення відповіді користувача
  const handleUserAnswerChange = (e) => {
    onChange({ ...content, userAnswer: e.target.value });
  };

  return (
    <li className="lecture__block">
      <h3 className="lecture__header">
        {order}. {content.title || "Missing word task"}
      </h3>

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
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <input
              type="text"
              className="lecture__form-input"
              placeholder="Text before"
              value={content.before}
              onChange={(e) => handleChange("before", e.target.value)}
            />
            <input
              type="text"
              className="lecture__form-input"
              placeholder="Answer"
              value={content.answer}
              onChange={(e) => handleChange("answer", e.target.value)}
            />
            <input
              type="text"
              className="lecture__form-input"
              placeholder="Text after"
              value={content.after}
              onChange={(e) => handleChange("after", e.target.value)}
            />
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={onDelete}
            >
              Delete
            </button>
          </>
        ) : (
          <div className="lecture__text">
            {content.before}
            <input
              type="text"
              className="lecture__form-input miss-word"
              style={{ width: `${(content.answer?.length || 5) + 2}ch` }}
              value={content.userAnswer || ""}
              onChange={handleUserAnswerChange}
              autoComplete="off"
            />
            {content.after}
          </div>
        )}
      </div>
    </li>
  );
};

export default GameFillBlank;
