import { faqs } from "./data";
import { AccordionItem } from "./AccordionItem";
import React, { useState, forwardRef } from "react";

export const Accordion = forwardRef((props, ref) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion" id="accordion" ref={ref}>
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
});
