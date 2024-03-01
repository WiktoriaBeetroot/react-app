import { useState } from "react";
import { Bill } from "./Bill";
import { Percentage } from "./Percentage";
import { Output } from "./Output";

export const TipCalculator = () => {
  const [billValue, setBillValue] = useState(0);
  const [percentageOwn, setPercentageOwn] = useState(0);
  const [percentageOther, setPercentageOther] = useState(0);
  let avaragePer = (percentageOwn + percentageOther) / 2;
  let tipAmout = Math.round((avaragePer * Number(billValue)) / 100);
  let totalBill = Number(billValue) + tipAmout;

  function resetCalculator() {
    setBillValue(0);
    setPercentageOwn(0);
    setPercentageOther(0);
  }

  return (
    <section className="tip-calculator">
      <h2>Tip Calculator</h2>
      <Bill
        billValue={billValue}
        onChangeBill={(e) => setBillValue(e.target.value)}
      />
      <Percentage
        percentage={percentageOwn}
        onChangePercentage={(e) => setPercentageOwn(Number(e.target.value))}
      >
        How did you like the service?
      </Percentage>
      <Percentage
        percentage={percentageOther}
        onChangePercentage={(e) => setPercentageOther(Number(e.target.value))}
      >
        How did your friend like the service?
      </Percentage>
      <Output
        billValue={billValue}
        totalBill={totalBill}
        tipAmout={tipAmout}
        resetCalculator={resetCalculator}
      />
    </section>
  );
};
