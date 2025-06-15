import { useState, useEffect } from "react";

const GameMatchPairs = ({
  edit,
  order,
  content,
  onChange,
  onDelete,
  length,
  onOrderChange
}) => {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [selectedPairs, setSelectedPairs] = useState(content.selected || []);

  useEffect(() => {
    setSelectedPairs(content.selected || []);
  }, [content.selected]);

  const handleChange = (index, field, value) => {
    const updatedPairs = [...(content.pairs || [])];
    updatedPairs[index][field] = value;
    onChange({ ...content, pairs: updatedPairs });
  };

  const handleAddPair = () => {
    const updatedPairs = [...(content.pairs || []), { left: "", right: "" }];
    onChange({ ...content, pairs: updatedPairs });
  };

  const handleDeletePair = (index) => {
    const updatedPairs = [...(content.pairs || [])];
    updatedPairs.splice(index, 1);
    onChange({ ...content, pairs: updatedPairs });
  };

  const handleCorrectChange = (index, value) => {
  const newCorrect = [...(content.correct || [])];

  // null означає, що користувач обрав "Select"
  if (value === null) {
    newCorrect[index] = null;
  } else {
    // уникаємо дублю
    if (newCorrect.includes(value)) return;
    newCorrect[index] = value;
  }

  onChange({ ...content, correct: newCorrect });
};


  const pairs = content.pairs || [];
  const correct = content.correct || [];

	const availableRightIndexes = (currentIndex) => {
		const currentValue = correct[currentIndex];

		const used = correct
			.map((val, idx) => (idx !== currentIndex ? val : null))
			.filter((val) => val !== null && val !== "");

		return pairs
			.map((_, i) => i)
			.filter((i) => !used.includes(i) || i === currentValue);
	};



  const handleSelectLeft = (index) => {
    if (selectedLeft === index) {
      setSelectedLeft(null);
      return;
    }
    setSelectedLeft(index);
  };

  const handleSelectRight = (index) => {
    if (selectedRight === index) {
      setSelectedRight(null);
      return;
    }
    setSelectedRight(index);
  };



  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      const pair = { left: pairs[selectedLeft].left, right: pairs[selectedRight].right };
      const alreadySelected = selectedPairs.some(
        (p) => p.left === pair.left && p.right === pair.right
      );
      const newSelected = alreadySelected
        ? selectedPairs.filter(
            (p) => !(p.left === pair.left && p.right === pair.right)
          )
        : [...selectedPairs, pair];
      setSelectedPairs(newSelected);
      onChange({ ...content, selected: newSelected });
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }, [selectedLeft, selectedRight]);

  return (
	<li className={`lecture__block`}>
      <h3 className="lecture__header">
        {order}. {content.title || "Match the pairs"}
      </h3>

      <div className="lecture__form">
        {edit ? (
          <>
            <input
              type="number"
              className="lecture__form-input order"
              placeholder="Order"
              value={order}
              min={1}
              max={length}
              onChange={(e) => onOrderChange(e.target.value)}
            />
            <input
              type="text"
              className="lecture__form-input title-choise"
              placeholder="Title"
              value={content.title || ""}
              onChange={(e) => onChange({ ...content, title: e.target.value })}
            />
            <div className="lecture__match-columns lecture__match-columns--triple">
              <div className="lecture__match-column">
                {pairs.map((pair, i) => (
                  <div key={i} className="lecture__match-pair">
                    <span className="lecture__match-index">
                      {String.fromCharCode(97 + i)}
                    </span>
                    <input
                      type="text"
                      className="lecture__form-input"
                      placeholder="Left"
                      value={pair.left}
                      onChange={(e) => handleChange(i, "left", e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="lecture__match-column">
                {pairs.map((pair, i) => (
                  <div key={i} className="lecture__match-pair">
                    <span className="lecture__match-index">{i + 1}</span>
                    <input
                      type="text"
                      className="lecture__form-input"
                      placeholder="Right"
                      value={pair.right}
                      onChange={(e) => handleChange(i, "right", e.target.value)}
                    />
                    <button onClick={() => handleDeletePair(i)} className="btn btn-secondary mt-2">
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="lecture__match-column">
                {pairs.map((_, i) => (
                  <div key={i} className="lecture__match-pair">
                    <span className="lecture__match-index">{String.fromCharCode(97 + i)}</span>
                    <select
											className="lecture__form-input"
											value={correct[i] ?? ""}
											onChange={(e) =>
												handleCorrectChange(i, e.target.value === "" ? null : Number(e.target.value))
											}
										>
											<option value="">Select</option>
											{availableRightIndexes(i).map((idx) => (
												<option key={idx} value={idx}>
													{idx + 1}
												</option>
											))}
										</select>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleAddPair} className="btn btn-warning mt-2">
              Add pair
            </button>
            <button onClick={onDelete} className="btn btn-danger mt-2">
              Delete block
            </button>
          </>
        ) : (
          <div className="lecture__match-block">
  <div className="lecture__match-columns select">
    <div className="lecture__match-column">
  {pairs.map((pair, i) => (
    <div
      key={i}
      className={`lecture__match-pair${selectedPairs.some(p => p.left === pair.left) ? " disabled" : ""}${selectedLeft === i ? " selected" : ""}`}
      onClick={() => !selectedPairs.some(p => p.left === pair.left) && handleSelectLeft(i)}
    >
      <span className="lecture__match-index">{String.fromCharCode(97 + i)}</span>
      {pair.left}
    </div>
  ))}
</div>

<div className="lecture__match-column">
  {pairs.map((pair, i) => (
    <div
      key={i}
      className={`lecture__match-pair${selectedPairs.some(p => p.right === pair.right) ? " disabled" : ""}${selectedRight === i ? " selected" : ""}`}
      onClick={() => !selectedPairs.some(p => p.right === pair.right) && handleSelectRight(i)}
    >
      <span className="lecture__match-index">{i + 1}</span>
      {pair.right}
    </div>
  ))}
</div>

  </div>


  <div className="lecture__match-selected">
		<div className="lecture__match-hint"> Your answers: </div>
					{selectedPairs.map((pair, i) => {
						const leftIndex = pairs.findIndex(p => p.left === pair.left);
						const rightIndex = pairs.findIndex(p => p.right === pair.right);
						
						const displayString = `${String.fromCharCode(65 + rightIndex)}:${leftIndex + 1}`;
						
						return (
							<div key={i} className="lecture__match-pair-chosen">
							<button
								onClick={() => {
									const newSelected = selectedPairs.filter((_, idx) => idx !== i);
									setSelectedPairs(newSelected);
									onChange({ ...content, selected: newSelected });
								}}
								className="link brd card-small__button answer"
							>
								{displayString}
							</button>
						</div>
							);
						})}
						</div>
				</div>
        )}
      </div>
    </li>
  );
};

export default GameMatchPairs;
