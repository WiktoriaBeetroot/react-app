import { useEffect, useState, forwardRef, useRef } from "react";

export const Navigation = forwardRef((props, ref) => {
    const { sliderRef, dateRef, cardsRef, accordionRef, calculatorRef, collapseRef, converterRef, locationRef } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const navigation = useRef(null);


    const sections = {
        slider: sliderRef.current,
        date: dateRef.current,
        cards: cardsRef.current,
        accordion: accordionRef.current,
        calculator: calculatorRef.current,
        collapse: collapseRef.current,
        converter: converterRef.current,
        location: locationRef.current,
    };

    useEffect(() => {
        if (navigation.current) {
            setHeaderHeight(navigation.current.offsetHeight);
        }
    }, [navigation]);

    useEffect(() => {
        isOpen ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open')

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

    function handleMenuToggle(e) {
        setIsOpen((curr) => !curr);

        if (e.target.closest(".navigation-menu")) {
            e.preventDefault();
        }

        const targetId = e.target.getAttribute("href")?.substring(1);
        const targetElement = sections[targetId];

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top;
            const scrollPosition = window.scrollY + targetPosition - headerHeight;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="navigation" ref={navigation}>
            <div className="navigation__container">
                <button onClick={handleMenuToggle}>Navigation</button>
                <ul className={`navigation-menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="#slider" onClick={handleMenuToggle}>Slider</a></li>
                    <li><a href="#date" onClick={handleMenuToggle}>Date Counter</a></li>
                    <li><a href="#cards" onClick={handleMenuToggle}>FlashCards</a></li>
                    <li><a href="#accordion" onClick={handleMenuToggle}>Accordion</a></li>
                    <li><a href="#calculator" onClick={handleMenuToggle}>Calculator</a></li>
                    <li><a href="#collapse" onClick={handleMenuToggle}>Collapse Text</a></li>
                    <li><a href="#converter" onClick={handleMenuToggle}>Currency Converter</a></li>
                    <li><a href="#location" onClick={handleMenuToggle}>Location</a></li>
                </ul>
            </div>
        </div>
    );
});
