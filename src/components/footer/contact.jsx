const Contact = () => {
  return (
    <div>
      <div
        className="flex my-10 font-kerla   xl:mx-40 xl:gap-20 
      lg:gap-0 lg:flex-row lg:ml-24 md:gap-20 md:flex-col md:pb-10 md:items-center 
      max-sm:flex-col max-sm:text-center max-sm:space-y-10 max-sm:items-center">
        {/* 1 */}

        <div className="md:flex xl:gap-20">
          <div className="w-[15.9375rem] space-y-10">
            <div className="text-[#837D88] cursor-pointer hover:underline text-[0.8125rem] font-[700] tracking-[0.09375rem] ">
              OUR COMPANY
            </div>
            <div className="text-[#2D2641] text-[0.8125rem] font-[700] space-y-3 tracking-[0.09375rem] ">
              <div className="cursor-pointer hover:underline">HOW WE WORK</div>
              <div className="cursor-pointer hover:underline">WHY INSURE?</div>
              <div className="cursor-pointer hover:underline"> VIEW PLANS</div>
              <div className="cursor-pointer hover:underline">REVIEWS</div>
            </div>
            {/* */}
          </div>
          {/* 2 */}
          <div className="w-[15.9375rem]  space-y-10">
            <div className="cursor-pointer hover:underline text-[#837D88] text-[0.8125rem] font-[700] tracking-[0.09375rem] ">
              HELP ME
            </div>
            <div className="text-[#2D2641] text-[0.8125rem] font-[700] space-y-3 tracking-[0.09375rem] ">
              <div className="cursor-pointer hover:underline">FAQ</div>
              <div className="cursor-pointer hover:underline">TERMS OF USE</div>
              <div className="cursor-pointer hover:underline">
                PRIVACY POLICY
              </div>
              <div className="cursor-pointer hover:underline">COOKIES</div>
            </div>
          </div>
        </div>
        <div className="md:flex xl:gap-20">
          {/* 3 */}
          <div className="w-[15.9375rem]  space-y-10">
            <div className="cursor-pointer hover:underline text-[#837D88] text-[0.8125rem] font-[700] tracking-[0.09375rem] ">
              CONTACT
            </div>
            <div className="text-[#2D2641] text-[0.8125rem] font-[700] space-y-3 tracking-[0.09375rem] ">
              <div className="cursor-pointer hover:underline">SALES</div>
              <div className="cursor-pointer hover:underline">SUPPORT</div>
              <div className="cursor-pointer hover:underline">LIVE CHAT</div>
            </div>
          </div>
          {/* 4 */}
          <div className="xl:w-[15.9375rem] lg:w-[10rem] md:w-[15.9375rem]  space-y-10">
            <div className="cursor-pointer hover:underline text-[#837D88] text-[0.8125rem] font-[700] tracking-[0.09375rem] ">
              OTHERS
            </div>
            <div className="text-[#2D2641] text-[0.8125rem] font-[700] space-y-3 tracking-[0.09375rem] ">
              <div className="cursor-pointer hover:underline">CAREERS</div>
              <div className="cursor-pointer hover:underline">PRESS</div>
              <div className="cursor-pointer hover:underline">LICENSES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
