import React from "react";
import testimonials from "./TestimonialsObject";
import TestimonialsCard from "./TestimonialCards";

export default function Testimonials() {
  function renderTestimonialsCard() {
    return testimonials.map((testimonial) => {
      return (
        <div key={testimonial.id} className="col-3">
          <TestimonialsCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            testimonials={testimonial.testimonial}
            image={testimonial.image}
          />
        </div>
      );
    });
  }

  return (
    <div className="depoimentos">
      <div className="corpo-categorias">
        <div className="linha">
          {/* <!-- INICIO ITEM DEPOIMENTOS --> */}
          {renderTestimonialsCard()}
          {/* <!-- FIM ITEM DEPOIMENTOS --> */}
        </div>
      </div>
    </div>
  );
}
