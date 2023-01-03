import "./Sort.scss";

function Sort({ handleClick }) {
  return (
    <div className="Sort">
      <div className="Sort-btns-wrapper">
        <button onClick={handleClick} name="All" className="Sort-btn">
          All
        </button>
        <button onClick={handleClick} name="UI" className="Sort-btn">
          UI
        </button>
        <button onClick={handleClick} name="UX" className="Sort-btn">
          UX
        </button>
        <button onClick={handleClick} name="Enhancement" className="Sort-btn">
          Enhancement
        </button>
        <button onClick={handleClick} name="Bug" className="Sort-btn">
          Bug
        </button>
        <button onClick={handleClick} name="Feature" className="Sort-btn">
          Feature
        </button>
      </div>
    </div>
  );
}

export default Sort;
