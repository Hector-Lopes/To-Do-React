import "./input.scss";

const Input = ({ label, value, onChange, onEnterPress }) => {
  const handlekeydown = (e) => {
    if (e.key == "Enter") {
      onEnterPress();
    }
  };

  return (
    <>
      <div className="custom-input-container">
        <input
          type="text"
          className="custom-input"
          value={value}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => handlekeydown(e)}
        />
        {label ? (
          <label
            className={`${value.lenght > 0 ? "shrink" : ""} custom-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};
export default Input;
