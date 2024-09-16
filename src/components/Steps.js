import React, { forwardRef, useState } from "react";
import { Message } from "./Message";
import { Button } from "./Button";
import { messages } from "./data";

export const Steps = forwardRef(( prop, ref) => {
  const maxValue = messages.length;
  const [step, setStep] = useState(1);
  const numbers = [1, 2, 3];
  let nextClass = step < maxValue ? "active" : "";
  let prevClass = step !== 1 ? "active" : "";
  const [isOpen, setIsOpen] = useState(true);

  function toggleClose() {
    setIsOpen((currentOpen) => !currentOpen);
  }

  function nextStep() {
    step < maxValue && setStep((currentStep) => currentStep + 1);
  }

  function prevStep() {
    step !== 1 && setStep((currentStep) => currentStep - 1);
  }

  return (
    <section id="slider" ref={ref}>
       <button className="close" onClick={toggleClose}>
        {isOpen ? "✕" : "+"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {numbers.map((number, index) => (
              <div className={step - 1 >= index ? "active" : ""} key={index}>
                {number}
              </div>
            ))}
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button onClick={prevStep} btnClass={prevClass}>
              👈 Previous
            </Button>
            <Button onClick={nextStep} btnClass={nextClass}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </section>
  );
});
