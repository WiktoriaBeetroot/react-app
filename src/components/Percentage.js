export const Percentage = ({ percentage, onChangePercentage, children }) => {
  return (
    <div className="select">
      <label htmlFor="per-select">{children}</label>
      <select id="per-select" value={percentage} onChange={onChangePercentage}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};
