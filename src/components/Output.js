export const Output = ({ billValue, totalBill, tipAmout, resetCalculator }) => {
  if (!billValue) return;

  return (
    <div>
      <p className="output">
        You pay <span className="output-price">${totalBill}</span> (${billValue}{" "}
        + ${tipAmout} tip)
      </p>
      <button onClick={resetCalculator} className="active">
        Reset
      </button>
    </div>
  );
};
