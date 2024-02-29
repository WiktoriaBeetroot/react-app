export const AccordionItem = ({ item, index, curOpen, onClick, children }) => {
  let isOpen = index === curOpen;

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onClick(isOpen ? null : index)}
    >
      <p className="number">{index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div className={isOpen ? "content-box active" : "content-box"}>
        {children}
      </div>
    </div>
  );
};
