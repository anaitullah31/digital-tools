const Button = ({ children, style }) => {
  return (
    <button className={`btn ${style ? style : "btn-active btn-primary"}`}>
      {children}
    </button>
  );
};

export default Button;
