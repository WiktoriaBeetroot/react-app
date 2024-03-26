import { useState } from "react";
import { DateCounter } from "./Date-Counter";
import { FlashCards } from "./Flashcards";
import { Accordion } from "./Accordion";
import { Steps } from "./Steps";
import { messages } from "./data";
import { TipCalculator } from "./TipCalculator";
import { Expander } from "./Expander";

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
      <Expander>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Expander>

      <Expander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Expander>

      <Expander expandedDefault={false} className="full">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Expander>
    </div>
  );
}

export default App;
