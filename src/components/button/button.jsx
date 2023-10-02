import "./button.scss";
const Button = ({ onClick, children }) => {
  return (
    <>
      <div className="custom-button-container" onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default Button;
