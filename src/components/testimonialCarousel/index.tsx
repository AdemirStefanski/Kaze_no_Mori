import React, { useState, useEffect } from "react";
import { CarouselContainer, Slider, LeftArrow, RightArrow } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

import testimonials from "../../data/testimonials.json";
import TestimonialCard from "../cardTestimonial";

const CARD_WIDTH = 300;

const shuffleArray = (array: any[]) => {
  let shuffledArray = [...array]; // Faz uma cópia para não modificar o original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos
  }
  return shuffledArray;
};

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shuffledTestimonials, setShuffledTestimonials] =
    useState(testimonials);

  const total = shuffledTestimonials.length;

  useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials)); // Embaralha os depoimentos ao montar o componente
  }, []);

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <LeftArrow onClick={handlePrev}>
        <ChevronLeft size={32} />
      </LeftArrow>
      <Slider
        style={{ transform: `translateX(-${activeIndex * CARD_WIDTH}px)` }}
      >
        {shuffledTestimonials.map((item, index) => {
          const mappedData = {
            ...item,
            testimonial: item.review,
          };
          return (
            <div key={index}>
              <TestimonialCard data={mappedData} />
            </div>
          );
        })}
      </Slider>
      <RightArrow onClick={handleNext}>
        <ChevronRight size={32} />
      </RightArrow>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
