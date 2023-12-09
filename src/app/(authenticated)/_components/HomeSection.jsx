import React from "react";

function HomeSection() {
  return (
    <>
      <div className="text-white aspect-[1.98/1] rounded-lg py-8 px-10" style={{
        backgroundImage: "url(/images/featuredimg.png)",
        backgroundPosition: "center",
      }}>
        <h2 className="text-[1.62906rem]">Featuring</h2>
        <div className="mt-12">
          <h3 className="text-[3.00406rem] capitalize [leading-trim:both]">Metro Boomin</h3>
          <p className="text-[0.75rem] [leading-trim:both] max-w-[15rem]">
            Discover Metro's latest hits and records listen to Metro Boomin's
            latest playlist
          </p>
        </div>
      </div>
      <div className="text-white mt-7">
        <h2 className="text-[1.37906rem] mb-4">Pick Your mood</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="">
            <img className="aspect-square rounded-[0.625rem]" src="/images/happy.png" alt="" />
            <p className="mt-2">Happy</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]" src="/images/happy.png" alt="" />
            <p className="mt-2">Sad</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]" src="/images/happy.png" alt="" />
            <p className="mt-2">Angry</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]" src="/images/happy.png" alt="" />
            <p className="mt-2">Moody</p>
          </div>
          <div className="">
            <img className="aspect-square rounded-[0.625rem]" src="/images/happy.png" alt="" />
            <p className="mt-2">Moody</p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default HomeSection;
