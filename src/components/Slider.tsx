'use client'
import { useState } from "react";
import styles from "../styles/components/Slider.module.css";

type SliderProps = {
    images: string[];
  };
  
  const Slider = ({ images }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % images.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };
  
    return (
      <div className={styles.slider}>
        <img className={styles.slide} src={images[currentSlide]} alt="" />
        <button className={styles.prevBtn} onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className={styles.nextBtn} onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
    );
  };
  
  export  {Slider};