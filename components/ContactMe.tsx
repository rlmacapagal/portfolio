import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center md:mt-[35%] mt-10">
          <EmailIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>louiermacapagal@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <LocationOnIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>Metro Manila, Philippines</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
