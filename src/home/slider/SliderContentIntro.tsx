import React from "react";
import SlideItem from "./sliderItem/SlideItem";
import Arrow from "../../components/svg_Icon/utils/Arrow";
const SliderIntro = () => {
    return (
        <>
            <SlideItem
                h2="Coaching"
                h2bold="Anti-stress"
                h2bold2="Avant examen"
                descriptionBold="Libère-toi"
                description=" du stress !"
                description2="En route vers le "
                descriptionBold2="succès ! ✈️"
                className="start"
            />
            <SlideItem
                h2=""
                h2bold=""
                h2bold2=""
                descriptionBold=""
                description=""
                description2=""
                descriptionBold2=""
                className="slide"
            />
            <SlideItem
                h2=""
                h2bold=""
                h2bold2=""
                descriptionBold=""
                description=""
                description2=""
                descriptionBold2=""
                className="slide"
            />
            <SlideItem
                h2=""
                h2bold=""
                h2bold2=""
                descriptionBold=""
                description=""
                description2=""
                descriptionBold2=""
                className="slide"
            />
            <SlideItem
                h2=""
                h2bold=""
                h2bold2=""
                descriptionBold=""
                description=""
                description2=""
                descriptionBold2=""
                className="slide"
            />
            <span className="banner-arrow flx-c">
                <Arrow className="" ariaLabel="buttonL" onClick={null} />
                <Arrow className="" ariaLabel="buttonR" onClick={null} />
            </span>
        </>
    );
};

export default React.memo(SliderIntro);
