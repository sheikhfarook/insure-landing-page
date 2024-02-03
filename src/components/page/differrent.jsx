import flash from "../../assets/icon-snappy-process.svg";
import dollar from "../../assets/icon-affordable-prices.svg";
import people from "../../assets/icon-people-first.svg";
import FindOut from "./findout";
const Differrent = () => {
  return (
    <>
      <div
        className="xl:mt-[21rem] xl:ml-[10rem] space-y-14
        md:mt-[45rem]  md:mx-[3rem]     max-sm:w-[19rem] max-sm:mx-auto max-sm:mt-[12rem]">
        <div className="w-[9.375rem] h-[0.0625rem] bg-[#C396C6] max-sm:m-auto"></div>
        <h1
          className="  md:w-[44.8125rem] h-[4rem] text-[4.5rem] font-dm 
        font-[400] leading-[4rem] tracking-[-0.0625rem]
        max-sm:text-[3rem]  ">
          We’re different
        </h1>
        <div
          className="flex gap-20 text-[1rem] text-[400] tracking-[-0.02431rem]
        max-sm:flex-col max-sm:w-[19.3rem] max-sm:m-auto  
        max-sm:text-center">
          <div className="space-y-1 md:w-[21.875rem] max-sm:space-y-10 ">
            <div>
              <img className="max-sm:m-auto" src={flash} alt="" />
            </div>
            <div className="space-y-3">
              <p className="text-[1.75rem] font-dm max-sm:text-[1.6rem]">
                Snappy Process
              </p>
              <p className="font-kerla">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
          </div>
          <div className="space-y-1 md:w-[21.875rem] max-sm:space-y-10 ">
            <div>
              <img className="max-sm:m-auto" src={dollar} alt="" />
            </div>
            <div className="space-y-3">
              <p className="text-[1.75rem] font-dm max-sm:text-[1.6rem]">
                Affordable Prices
              </p>
              <p className="font-kerla">
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
          </div>
          <div className="space-y-1 md:w-[21.875rem] max-sm:space-y-10 ">
            <div>
              <img className="max-sm:m-auto" src={people} alt="" />
            </div>
            <div className="space-y-3">
              <p className="text-[1.75rem] font-dm  max-sm:text-[1.6rem]">
                People First
              </p>
              <p className="font-kerla">
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
      <FindOut />
    </>
  );
};

export default Differrent;
