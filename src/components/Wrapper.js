import React, { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import { get_footer_url,get_logo_url } from "../helper/index";
import Header from "./header/Header";


const Container = ({ children}) => {
  const [logo, setLogo] = useState("");
  const [footerInfo, setFooterInfo] = useState({});
  const fetchFooterData = () => {
    Promise.all([get_footer_url,get_logo_url])
      .then(([response1, response2]) => {
        if (response1.status === 200 && response2.status === 200) {
          console.log(response1, response2, "response2");
          setFooterInfo({ ...response1.data.data });
          setLogo(response2.config.url);
        }
      })
      .catch((error) => console.log(error.response));
  };
  useEffect(() => {
    fetchFooterData();
  }, []);
  return (
    <>
      <Header logo={logo}  />

      {children}

      <Footer footerInfo={footerInfo} logo={logo} />
    </>
  );
};

export default Container;
