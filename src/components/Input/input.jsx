import "./input.scss";

const Input = ({ label, value, onchange }) => {
  return (
    <>
      <div className="custom-input-container">
        <input type="text" className="custom-input" />
        {label ? (
          <label
            className={`${value.lenght > 0 ? "shrink" : ""} custom-input-label`}
            onchange={(e) => onchange(e)}
          >
            {label}
          </label>
        ) : null}
      </div>
    </>
  );
};
export default Input;
