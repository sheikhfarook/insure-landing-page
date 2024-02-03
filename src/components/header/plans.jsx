import family from "../../assets/image-intro-desktop.jpg";

const Plans = () => {
  return (
    <div className="h-[37.5rem] bg-[#2D2641] flex mt-5">
      <div className="background"></div>
      <div className="right-background">
        <div className="flex my-20 md:gap-20 md:flex-col xl:flex-row">
          <div
            className="text-white w-[33.75rem] md:ml-[5rem]
             max-sm:w-[22rem] max-sm:text-center ">
            <div className="w-[9.375rem] h-[0.0625rem] mt-10 max-sm:hidden ">
              <hr />
            </div>
            <h1
              className=" h-[8.75rem] text-[4.5rem] font-dm font-[400] mt-14
             leading-[4rem] tracking-[-0.0625rem]
             
             max-sm:text-[3.2rem]   max-sm:leading-[3.5rem]  max-sm:ml-2">
              Humanizing your insurance.
            </h1>
            <p
              className=" h-[5.25rem] text-[1rem] font-[400] mt-2 
            leading-[1.625rem] font-kerla max-sm:text-[1rem]
            max-sm:ml-7 max-sm:mx-auto">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <div
              className="w-[9.125rem] h-[2.5rem] border-[1.5px] text-center py-[0.65rem]
            text-[0.8125rem] font-[700] tracking-[0.09375rem] text-[#FFF] mt-10
            cursor-pointer
            hover:bg-[#FFF] hover:text-[#2C2830] font-kerla
            max-sm:mt-16 max-sm:m-auto">
              VIEW PLANS
            </div>
          </div>
          <div>
            <img
              className="  relativeh-[41.875rem] my-6 xl:m-auto  max-sm:hidden
               lg:ml-[15rem] md:ml-[8rem] md:mt-[-3rem]"
              src={family}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
