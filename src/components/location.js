import { forwardRef, useState } from "react";
import { useLocation } from "./useLocation";

export const Location = forwardRef((props, ref) => {
    const [countClicks, setCountClicks] = useState(0);
    const { isLoading, position, error, getPosition }  = useLocation();

    const { lat, lng } = position;

    function handleClick() {
        setCountClicks((count) => count + 1);
        getPosition()
    }

    return (
        <section className="location" ref={ref}>
            <h2>Get position by OpenStreetMap</h2>
            <button onClick={handleClick} disabled={isLoading}>
                Get my position
            </button>

            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p>
                Your GPS position:{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                >
                    {lat}, {lng}
                </a>
                </p>
            )}

            <p>You requested position {countClicks} times</p>
        </section>
    );
})