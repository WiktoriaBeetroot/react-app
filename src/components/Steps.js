import { Message } from "./Message";
import { Button } from "./Button";
import { messages } from "./data";

export const Steps = ({ step, next, prev, maxValue }) => {
  const numbers = [1, 2, 3];
  let nextClass = step < maxValue ? "active" : "";
  let prevClass = step !== 1 ? "active" : "";

  return (
    <section className="steps">
      <div className="numbers">
        {numbers.map((number, index) => (
          <div className={step - 1 >= index ? "active" : ""} key={index}>
            {number}
          </div>
        ))}
      </div>

      <Message step={step}>{messages[step - 1]}</Message>

      <div className="buttons">
        <Button onClick={prev} btnClass={prevClass}>
          👈 Previous
        </Button>
        <Button onClick={next} btnClass={nextClass}>
          Next 👉
        </Button>
      </div>
    </section>
  );
};
