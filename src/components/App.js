import { useState } from "react";
import { DateCounter } from "./Date-Counter";
import { FlashCards } from "./Flashcards";
import { Accordion } from "./Accordion";
import { Steps } from "./Steps";
import { messages } from "./data";
import { TipCalculator } from "./TipCalculator";

function App() {
  const maxValue = messages.length;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function nextStep() {
    step < maxValue && setStep((currentStep) => currentStep + 1);
  }

  function prevStep() {
    step !== 1 && setStep((currentStep) => currentStep - 1);
  }

  function toggleClose() {
    setIsOpen((currentOpen) => !currentOpen);
  }

  return (
    <div className="container">
      <button className="close" onClick={toggleClose}>
        {isOpen ? "✕" : "+"}
      </button>
      {isOpen && (
        <Steps
          step={step}
          next={nextStep}
          prev={prevStep}
          maxValue={maxValue}
        />
      )}
      <DateCounter />
      <FlashCards />
      <Accordion />
      <TipCalculator />
    </div>
  );
}

export default App;
