import logo from "../../assets/logo.svg";
import facebbok from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-facebook.svg";
import Contact from "./contact";

const SocialMediaLinkes = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] xl:h-[24.5625rem] mt-32">
        <div className="md:mx-40 py-10 ">
          <div
            className="flex justify-between
          max-sm:space-y-5 max-sm:flex-col max-sm:items-center">
            <img className="max-sm:w-[7rem] " src={logo} alt="" />
            <div className="flex gap-5 cursor-pointer">
              <img className="" src={facebbok} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>

        <div className="md:mx-40">
          <hr />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default SocialMediaLinkes;
