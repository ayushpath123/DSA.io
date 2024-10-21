const MidHeader = () => {
  return (
    <div>


      <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:gap-2 ">
        <div className="lg:m-10">
          <div className="flex flex-col gap-1 items-center justify-center lg:justify-start lg:items-start ">
          <div className="font-extrabold text-5xl text-green-600 lg:text-7xl">ATTEND LIVE</div>
          <div className="font-extrabold text-5xl text-green-950 lg:text-7xl">CLASSES </div>
          <div className="font-extrabold text-5xl text-green-950 lg:text-7xl">EVERY WEAK</div>{" "}
          </div>
        <div className="text-gray-400 my-4 text-center lg:my-10 lg:text-xl ">Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee. </div>
        <div className="flex items-center justify-center  lg:items-start lg:justify-start">
            <button className=" p-2 rounded-2xl bg-green-600 text-white font-bold h-10 lg:text-2xl lg:p-4 lg:h-20 lg:rounded-full ">Join 24/7 Whatsapp + discord for ₹100/Month</button>
        </div>
      </div>
            <div>
            <img  className="px-4 lg:h-[500px] lg:w-[700px]" src="./src/images/aryan.png" alt="Image" />
            </div>
      </div>





    </div>
  );
};
export default MidHeader;
