// TestimonialCard.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Header,
  Name,
  Location,
  Content,
  TestimonialText,
  Rating,
  Star,
} from "./styles";

interface TestimonialData {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
}

interface TestimonialCardProps {
  data: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Alterna entre expandido/retraído ao clicar no card
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  // Verifica cliques fora do card para retrair o depoimento
  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Card ref={cardRef} onClick={handleClick} expanded={expanded}>
      <Header>
        <Name>{data.name}</Name>
        <Location>{data.location}</Location>
      </Header>
      <Content>
        <TestimonialText expanded={expanded}>
          {data.testimonial}
        </TestimonialText>
      </Content>
      <Rating>
        {Array.from({ length: data.rating }, (_, i) => (
          <Star key={i}>&#9733;</Star> // Código HTML para estrela preenchida
        ))}
      </Rating>
    </Card>
  );
};

export default TestimonialCard;
