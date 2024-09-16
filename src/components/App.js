import { useState, useRef } from "react";
import { DateCounter } from "./Date-Counter";
import { FlashCards } from "./Flashcards";
import { Accordion } from "./Accordion";
import { Steps } from "./Steps";
import { messages } from "./data";
import { TipCalculator } from "./TipCalculator";
import { Expander } from "./Expander";
import { Converter } from "./Converter";
import { Navigation } from "./Navigation";

function App() {
  const maxValue = messages.length;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const sliderRef = useRef(null);
  const dateRef = useRef(null);
  const cardsRef = useRef(null);
  const accordionRef = useRef(null);
  const calculatorRef = useRef(null);
  const collapseRef = useRef(null);
  const converterRef = useRef(null);

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
        <Navigation
                sliderRef={sliderRef}
                dateRef={dateRef}
                cardsRef={cardsRef}
                accordionRef={accordionRef}
                calculatorRef={calculatorRef}
                collapseRef={collapseRef}
                converterRef={converterRef}
            />
      <button className="close" onClick={toggleClose}>
        {isOpen ? "✕" : "+"}
      </button>
      {isOpen && (
        <Steps
          ref={sliderRef}
          step={step}
          next={nextStep}
          prev={prevStep}
          maxValue={maxValue}
        />
      )}
      <DateCounter 
        ref={dateRef}
      />
      <FlashCards 
        ref={cardsRef}
      />
      <Accordion 
        ref={accordionRef}
      />
      <TipCalculator 
        ref={calculatorRef}
      />
      <Expander
      ref={collapseRef}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Expander>

      <Expander
        ref={collapseRef}
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

      <Expander ref={collapseRef} expandedDefault={false} className="full">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </Expander>

      <Converter ref={converterRef}/>
    </div>
  );
}

export default App;
