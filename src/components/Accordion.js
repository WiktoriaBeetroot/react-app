import { faqs } from "./data";
import { AccordionItem } from "./AccordionItem";
import { useState } from "react";

export const Accordion = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          item={item}
          index={index}
          key={item.title}
          curOpen={curOpen}
          onClick={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};
