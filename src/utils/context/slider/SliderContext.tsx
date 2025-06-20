"use client";
import React, {
    createContext,
    useState,
    ReactNode,
    useMemo,
    // useEffect,
} from "react";
import { sliderContent } from "../../../assets/data/content/slider";
import { useSlides } from "./useSlides";
import { useScrollListener } from "./useScrollListener";
import { useAutoSlide } from "./useAutoSlide";
import { classGetter } from "./fnSliderContext";
import { createUseContext } from "../utils/createUseContext";

interface SliderContextType {
    currentSlide: number;
    nextSlide: () => void;
    prevSlide: () => void;
    getClass: (index: number) => string;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stopTimerButton, setStopTimerButton] = useState(false);
    const { nextSlide, prevSlide } = useSlides(
        currentSlide,
        setCurrentSlide,
        setStopTimerButton,
        sliderContent.length
    );

    useScrollListener(setStopTimerButton, stopTimerButton);
    useAutoSlide(
        stopTimerButton,
        setStopTimerButton,
        setCurrentSlide,
        sliderContent.length
    );

    // useEffect(() => {
    //     // const savedSlideRef = sessionStorage.getItem("slideRef");
    //     // if (savedSlideRef === null) {
    //     //     const timer = setTimeout(() => setCurrentSlide(1), 2400);
    //     //     return () => clearTimeout(timer);
    //     // }
    // }, []);

    const contextValue = useMemo(
        () => ({
            currentSlide,
            nextSlide,
            prevSlide,
            getClass: (index: number) =>
                classGetter(
                    index,
                    currentSlide,
                    (currentSlide - 1 + sliderContent.length) %
                        sliderContent.length,
                    (currentSlide + 1) % sliderContent.length
                ),
        }),
        [currentSlide, nextSlide, prevSlide]
    );

    return (
        <SliderContext.Provider value={contextValue}>
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = createUseContext(SliderContext, "useSlider");
