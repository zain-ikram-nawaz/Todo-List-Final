function Button({ children, click }) {
  return (
    <div>
      <button className="btn" onClick={click}>
        {children}
      </button>
    </div>
  );
}
export default Button;
