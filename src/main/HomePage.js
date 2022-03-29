import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { ContactForm}  from "../contactForm/ContactForm";


const HomePage = () => {
  return (
    <Wrapper>
      <ContactForm />
    </Wrapper>
  );
};

export default HomePage;
