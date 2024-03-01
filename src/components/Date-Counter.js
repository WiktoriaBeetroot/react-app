import { useState } from "react";

export const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function resetStep() {
    setStep(1);
    setCount(0);
  }

  return (
    <section className="date">
      <div className="date__steps">
        <label htmlFor="range">Set step</label>
        <input
          type="range"
          min="0"
          max="10"
          name="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <span>{step}</span>
      </div>

      <div className="date__count">
        <button onClick={() => setCount(count - (step === 0 ? 1 : step))}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount(count + (step === 0 ? 1 : step))}>
          +
        </button>
      </div>

      {(count !== 0 || step !== 1) && (
        <div className="date__reset" onClick={resetStep}>
          <button>Reset</button>
        </div>
      )}

      <div className="date__date">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </section>
  );
};
