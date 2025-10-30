import "../css/slideshow.css";
import { useState, useEffect, useRef } from "react";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  const importAll = (resource) => {
    return resource.keys().map(resource);
  };

  const images = importAll(
    require.context("/public/images/slideshow", false, /\.(png|jpe?g|svg|webp|)$/)
  );

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const slideForward = (e) => {
    e.preventDefault();
    setSlideIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
    resetTimer();
  };

  const slideBackward = (e) => {
    e.preventDefault();
    setSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
    resetTimer();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <section id="slideshow">
      <img src={images[slideIndex]} alt="Slideshow" />
      <a className="arrow" onClick={slideBackward} id="left-arrow" href="#">
        &lt;
      </a>
      <a className="arrow" onClick={slideForward} id="right-arrow" href="#">
        &gt;
      </a>
    </section>
  );
};

export default Slideshow;

