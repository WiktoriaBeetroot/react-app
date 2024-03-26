import { useState } from "react";

export const Expander = ({
  children,
  collapseButtonText = "Hide text",
  expandButtonText = "Show text",
  buttonColor = "#7950f2",
  collapsedNumWords = 15,
  expandedDefault = true,
  className = "",
}) => {
  const buttonStyles = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
    padding: 0,
    display: "inline",
  };
  const [expanded, setExpanded] = useState(expandedDefault);
  const collapsedText =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <section className={`collapse-text ${className}`}>
      {expanded ? children : collapsedText}
      <button style={buttonStyles} onClick={() => setExpanded(!expanded)}>
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </section>
  );
};
