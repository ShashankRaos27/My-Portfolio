import React from "react";
import Lottie from "lottie-react";
import developerImage from "../../assets/images/developerImage.json";
import manSittingWithLaptop from "../../assets/images/manSittingWithLaptop.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import "./UserInfo.css";
import { Button } from "antd";
const UserInfo = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-8">
      <div className="w-full flex">
        <div className="w-[70%]">
          <h1 className="text-[60px] leading-[1.1] text-black my-5 flex">
            Hi all, I'm Shashank Rao
            <span className="handWave">
              <img
                alt="👋"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                className="h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
            </span>
          </h1>
          <div className="my-6">
            <p className="text-[30px] leading-[40px] text-[#868e96]">
              A passionate React FrontEnd Developer{" "}
              <img
                alt="🚀"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f680.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              having an experience of building Web and Mobile applications with
              JavaScript / React js and some other cool libraries and
              frameworks.
            </p>
          </div>
          <div className="social-icons">
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
            {/* <a href="https://medium.com" className="icon medium">
              <FontAwesomeIcon icon={faMedium} />
            </a> */}
            <a href="https://stackoverflow.com" className="icon stackoverflow">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
          <div className="flex">
            <a className="buttonClass">Contact</a>
            <a className="buttonClass">Download My Resume</a>
          </div>
        </div>

        <div className="w-[30%]">
          <Lottie animationData={developerImage} />
        </div>
      </div>
      <Lottie animationData={manSittingWithLaptop} />
    </div>
  );
};

export default UserInfo;
