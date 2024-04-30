import React from "react";

import faq from "../assets/faq.json";
import Lottie from "lottie-react";

const Faq = () => {
  return (
    <div className='mt-12 md:mt-[80px] p-4 '>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 md:text-[40px] text-[28px] font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col-reverse lg:flex-row gap-8 p-4">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How can I purchase items from Artistic?
              </div>
              <div className="collapse-content">
                <p>   To purchase items from Artistic, simply browse our collection of handcrafted artistic products and add your desired items to the cart. Proceed to checkout, where you can securely complete your purchase using various payment methods.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
               Do you offer international shipping?
              </div>
              <div className="collapse-content">
               <p>
                  Yes, we offer international shipping to many countries worldwide. During the checkout process, you can select your country for shipping options and rates.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
             How can I track my order?
              </div>
              <div className="collapse-content">
                <p>        
          Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your delivery online.</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] md:w-[350px] mx-auto">
            <Lottie animationData={faq} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
