import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { PiPhoneCall } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
const OurServices = () => {
    return (
        <div className='p-6 md:my-[50px] md:py-[20px] lg:my-[90px] bg-[#F6F1E7]'>
              <div className='max-w-[700px] mx-auto text-center'>
                    <h2 className="font-bold text-[40px] pb-6">Our Services</h2>
                <p>Welcome to our vibrant online space dedicated to celebrating the beauty and creativity of art and craft! </p>
                </div>
        <div className="">
        
	<div className="container text-black  mx-auto grid justify-center grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-4">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <div className='text-center items-center flex justify-center font-bold text-4xl'>
                            <MdLocalShipping />
                        </div>
			<p className="text-xl font-bold leading-none lg:text-xl">Free Shipping</p>
			<p className="text-sm sm:text-base">Free Shipping 150$</p>
		</div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                         <div className='text-center items-center flex justify-center font-bold text-4xl'>
                           <GiReceiveMoney />
                        </div>
			<p className="text-xl font-bold leading-none lg:text-xl ">Money Guarantee</p>
			<p className="text-sm sm:text-base">Within 30 days for an exchange</p>
		</div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                         <div className='text-center items-center flex justify-center font-bold text-4xl'>
                           <PiPhoneCall />
                        </div>
			<p className="text-xl font-bold leading-none lg:text-xl">24/7 online support</p>
			<p className="text-sm sm:text-base">24 hours a day, 7 days a week</p>
		</div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                         <div className='text-center items-center flex justify-center font-bold text-4xl'>
                            <MdPayments />
                        </div>
			<p className="text-xl font-bold leading-none lg:text-xl">Flexible payment</p>
			<p className="text-sm sm:text-base">Pay with multiple credit cards</p>
		</div>
		
	</div>
</div>
        </div>
    );
};

export default OurServices;