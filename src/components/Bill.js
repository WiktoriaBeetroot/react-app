export const Bill = ({ billValue, onChangeBill }) => {
  return (
    <input type="number" value={billValue} onChange={onChangeBill}></input>
  );
};
