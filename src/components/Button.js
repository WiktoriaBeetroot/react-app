export const Button = ({ children, btnClass, onClick }) => {
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
