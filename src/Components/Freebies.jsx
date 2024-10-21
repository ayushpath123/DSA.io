import React from "react";
const Freebies = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-8 lg:flex-row lg:gap-12">
      <div className="flex flex-row gap-2">
        <div>
          <img src="./src/images/icon-guides.svg" alt="Guide" />
        </div>
        <div>5+ Guides for</div>
      </div>
      <div className="flex flex-row gap-2">
        <div>
          <img src="./src/images/icon-courses.svg" alt="Guide" />
        </div>
        <div>Exclusive Courses & Projects</div>
      </div>
      <div className="flex flex-row gap-2">
        <div>
          <img src="./src/images/icon-whatsapp.svg" alt="Guide" />
        </div>
        <div>24/7 WhatsApp Support Group</div>
      </div>
      <div className="flex flex-row gap-2">
        <div>
          <img src="./src/images/icon-sessions.svg" alt="Guide" />
        </div>
        <div>1:1 Free Session</div>
      </div>
    </div>
  );
};
export default Freebies