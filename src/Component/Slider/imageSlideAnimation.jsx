import "./imageSlideAnimation.css";

import PhotoImage1 from '../../assets/image/HomePage/HomePageSlide1.jpg';
import PhotoImage2 from '../../assets/image/HomePage/HomePageSlide2.jpg';
import PhotoImage3 from '../../assets/image/HomePage/HomePageSlide3.jpg';
import PhotoImage4 from '../../assets/image/HomePage/HomePageSlide4.jpg';
import { useState } from "react";

const slideAnimation = (photo) => {
    const [currentIndex, setIndex] = useState(0);

    const photos = [
        {
            id: 0,
            url: PhotoImage1,
            title: "Mountain Landscape"
        },
        {
            id: 1,
            url: PhotoImage2,
            title: "Forest Path"
        },
        {
            id: 2,
            url: PhotoImage3,
            title: "Ocean View"
        },
        {
            id: 3,
            url: PhotoImage4,
            title: "Desert Sunset"
        }
    ];

    const nextSlide = () => {
        setIndex(currentIndex == photos.length - 1 ? 0 : currentIndex + 1);
    }
    const previousSlide = () => {
        setIndex(currentIndex == 0 ? photos.length - 1 : currentIndex - 1);
    }

    return (
        <div className="slider">
            <div className="mainSlide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {photos.map((value) => (
                    <div className="slideContainer">
                        <img key={value.id} src={value.url} alt={value.title} className="slideImage" />
                        <>
                            <button className="arrowBtn leftArrow" onClick={previousSlide}>
                                &#8249;
                            </button>
                            <button className="arrowBtn rightArrow" onClick={nextSlide}>
                                &#8250;
                            </button>
                        </>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default slideAnimation;