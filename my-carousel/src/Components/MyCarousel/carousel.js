import React, { Children, useEffect, useState } from "react";
import "./styles.css";


const widthSpan = 100;
function Carousel(props) {
    const { children, infinite, timer } = props;
    let interval;

    const [sliderPosition, setSliderPosition] = useState(0);
    const prevSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        }
        else if (infinite) {
            newPosition = children.length - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }
    const nextSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1;
        }
        else if (infinite) {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }
    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < children.length; i++) {
            let elem = document.getElementById(`carouselItem` + i);
            elem.style.transform = `translateX(` + toTranslate + `%)`;
        }

    }
    const displayItems = Children.map(children, (child, index) => (
        <div className="carouselItem" id={`carouselItem` + index}>{child}</div>
    ))

    useEffect(() => {
        if (timer !== undefined) {
            // eslint-disable-next-line
            interval = setInterval(() => {
                nextSlideHandler();
            }, timer)
        }
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <>
            <div className="container">
                <div className="leftArrow" onClick={prevSlideHandler}>❮</div>
                <div className="carousel">
                    {displayItems}
                </div>
                <div className="rightArrow" onClick={nextSlideHandler}>❯</div>
            </div>
        </>
    )
}

export default Carousel;