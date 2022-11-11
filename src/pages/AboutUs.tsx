import React from "react";
import { AboutUS, HomeLayout } from "../css/AboutUs";
import about from "../img/about.jpg";

export default function AboutUs() {
  return (
    <AboutUS>
      <div className="grid">
      <HomeLayout>
      <h1>About Us</h1>
      <p>
        We started operations in 2020. We guarantee fresh produce. <br />Save time by
        shopping on our app and we'll deliver the products right to your home.<br />
        We use Stripe to process your payment.
      </p>
      
      </HomeLayout>
      <img src={about} width="183" height="275" />
      </div>
    </AboutUS>
  );
}
