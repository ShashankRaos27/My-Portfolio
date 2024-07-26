import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faGithub,
  faGitlab,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../userInfo/UserInfo.css";

const Contact = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal my-6 md:my-10 dark:text-white text-center md:text-start">
        Reach Out to me!
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start">
          <p className="text-base font-medium tracking-wide uppercase text-[#868E96] my-3">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <div className="flex items-center gap-x-1">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className="my-3 dark:text-white"
            />
            <p className="text-sm dark:text-white">Bengaluru, Karnataka</p>
          </div>
          <p className="text-base dark:text-white">
            Open for opportunities: Yes
          </p>
          <div className="social-icons mt-5">
            <a href="https://github.com/ShashankRaos27" className="icon github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-rao-s-3058b5195/"
              className="icon linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="mailto:shashankrao2708@gmail.com"
              className="icon envelope"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://gitlab.com" className="icon gitlab">
              <FontAwesomeIcon icon={faGitlab} />
            </a>
            <a href="https://facebook.com" className="icon facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://stackoverflow.com" className="icon stackoverflow">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-5 md:mt-0">
          <div className="rounded-full border-4 border-blue-500 overflow-hidden w-60 h-60">
            <img
              src="https://avatars.githubusercontent.com/u/91655038?s=400&u=fbdeb9bccb8e09c7588bf5d6bca6767671f96723&v=4"
              alt="profile pic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
