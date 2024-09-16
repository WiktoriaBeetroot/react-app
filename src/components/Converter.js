import { useEffect, useState, forwardRef } from "react"

export const Converter = forwardRef((props, ref) => {
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('EUR');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [result, setResult] = useState();
    const [error, setError] = useState('');

    useEffect(function() {
        async function fetchCurrency() {
            if (!from || !to || enteredAmount <= 0) {
                return
            }

            if (from === to) {
                setResult(null);
                setError('Cannot convert between the same currencies.')
                return
            }else {
                setError('')
            }

            try {
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${enteredAmount}&from=${from}&to=${to}`);

                const data = await res.json();

                const rates = data.rates;
                const keys = Object.keys(rates);

                if (keys.length > 0) {
                    const value = rates[keys[0]];
                    setResult(value)
                  }
            }catch(err){
                console.error(err.message)
            }
        }
        fetchCurrency()
    }, [enteredAmount, from, to])

    return (
        <section className="converter" id="converter" ref={ref}>
            <h2>Currency converter</h2>

            <div className="converter__content">
                <div className="converter__input">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" name="amount" onChange={(e) => setEnteredAmount(e.target.value)}/>
                </div>

                <div className="converter__input">
                    <label htmlFor="currency_from">From</label>
                    <select value={from} name="currency_from" onChange={(e) => setFrom(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>

                <div className="converter__input">
                    <label htmlFor="currency_to">To</label>
                    <select value={to} name="currency_to" onChange={(e) => setTo(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
            </div>

            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
            {result &&
                <p className="converter__output">OUTPUT: <span>{result}</span></p>
            }
      </section>
    )
})