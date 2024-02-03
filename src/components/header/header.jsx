// import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import hamburger from "../../assets/icon-hamburger.svg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import insure from "../../assets/INSURE.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      className="
    flex justify-between mt-[2rem] mx-[5%] ">
      <div>
        <img src={insure} alt="" />
      </div>
      <div>
        <div className="mt-[-8px] md:hidden ">
          <Button onClick={onOpen}>
            <img src={hamburger} alt="" />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              height="100%"
              backgroundColor="#2C2830"
              marginTop="6rem">
              <ModalCloseButton />
              <ModalBody>
                <div
                  className=" text-[#FFF] text-center
                   font-kerla text-[1.3rem] font-[400]
                    tracking-[0.09375rem] space-y-5">
                  <div>HOW WE WORK </div>
                  <div>BLOG</div>
                  <div>ACCOUNT</div>
                  <div className="border-2 h-[3.5rem] py-2.5">VIEW PLANS</div>
                  {/* <div
                    className="w-[9.125rem] h-[2.5rem] border-[1.5px]
                     text-center py-[4px] hover:bg-[#2C2830] 
                     hover:text-[#FFF] border-[#2C2830] 
                       bg-[#FFF] text-[#2C2830]">
                    VIEW PLANS
                  </div> */}
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div
        className=" flex gap-[1.56rem] text-[#837D88] text-center font-kerla text-[0.8125rem] 
        max-sm:hidden font-[700] tracking-[0.09375rem] cursor-pointer">
        <div>HOW WE WORK </div>
        <div>BLOG</div>
        <div>ACCOUNT</div>
        <div
          className="w-[9.125rem] h-[2.5rem] border-[1.5px] text-center py-[10px]
        hover:bg-[#2C2830] hover:text-[#FFF] border-[#2C2830] mt-[-10px]  bg-[#FFF] text-[#2C2830]">
          VIEW PLANS
        </div>
      </div>
    </div>
  );
};

export default Header;
