import React from "react";
const Premium = () => {
  return (
    <div className="lg:flex lg:flex-row lg:gap-12 lg:m-8">
      <div className="flex  flex-col gap-2 items-center justify-center">
        <h1 className="font-extrabold text-2xl lg:text-6xl">SIMPLE NO-TRICKS PRICING</h1>
        <h6 className="text-gray-400 lg:text-3xl lg:my-8">
          Everything you need to grow 10x for less than a coffee
        </h6>
      </div>
      <div className="rounded-xl border-2 border-gray-400 mt-10 pt-8 mx-4 ">
      <h1 className="font-bold text-xl text-start pl-4 ">Premium Elite Subscription</h1>
        <p className="text-gray-400 text-start pl-4">  Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee. </p>
      <div className="text-green-600 pt-10 pl-4">What's Included</div>
      <div className="flex flex-col pt-4 gap-4">
      <div className="flex pl-4"> <img className="pr-2" src="./src/images/icon-check.svg" alt="" /> Expert Mentors</div>
      <div className="flex pl-4"> <img className="pr-2" src="./src/images/icon-check.svg" alt="" /> Exclusive Courses</div>
      <div className="flex pl-4"> <img className="pr-2" src="./src/images/icon-check.svg" alt="" /> Networking & Collaboration</div>
      <div className="flex pl-4"> <img className="pr-2" src="./src/images/icon-check.svg" alt="" /> Career Guidance</div></div>
      
        <div className="flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-2xl m-4 bg-gray-100">
        <div className="text-gray-400 text-center">Less than a cup of coffee</div>
        <div className="flex items-center justify-center flex-row gap-2"><h1 className="font-bold text-2xl">$5</h1> 
         <h2 className="text-gray-400 line-through font-bold">$1000</h2></div>
         <div>
         <div className="flex justify-center">
            <button className="rounded-2xl border-green-600 bg-green-950  p-2 text-white antialiased ... font-bold ">Join Community</button>
        </div>
        
        <div className="m-4 flex flex-row justify-center">
            <img className="rounded-full h-8"src="./src/images/avatars/avatar-aryan.webp" alt="" />
            <img className="rounded-full h-8" src="./src/images/avatars/avatar-umang.webp" alt="" />
            <img className="rounded-full h-8" src="./src/images/avatars/avatar-kevin.webp" alt="" />
            <img className="rounded-full h-8" src="./src/images/avatars/avatar-umang.webp" alt="" />
            <img className="rounded-full h-8" src="./src/images/avatars/avatar-kevin.webp" alt="" />
        </div>
        <div className="text-center">100+ Active Members</div>
    </div>
    </div>
      
      

      </div>
    </div>
  );
};
export default Premium;
