import {
  faAws,
  faCss3Alt,
  faDocker,
  faFacebookF,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faLinkedinIn,
  faNode,
  faNpm,
  faPython,
  faReact,
  faSass,
  faStackOverflow,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFireAlt,
  faDatabase as faSolidDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import React from "react";
import developerImage from "../../assets/images/developerImage.json";
import manSittingWithLaptop from "../../assets/images/manSittingWithLaptop.json";
import buildingBlocks from "../../assets/images/buildingBlocks.json";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="w-[90%] p-5 py-2.5 px-5 mx-auto mt-11  ">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-[70%]">
          <h1 className="text-[30px] sm:text-[60px] leading-[1.1] text-black my-5 flex dark:text-white">
            Hi all, I'm Shashank Rao
            <span className="handWave">
              <img
                alt="👋"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                className=" inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />
            </span>
          </h1>

          <div className="my-6">
            <p className="text-[30px] leading-[40px] text-[#868e96] dark:text-white">
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
            <a href="https://stackoverflow.com" className="icon stackoverflow">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
          <div className="flex">
            <button
              className="buttonClass"
              onClick={() => {
                /* handle click action */
              }}
            >
              Contact
            </button>

            <button
              className="buttonClass"
              onClick={() => {
                /* handle click action */
              }}
            >
              Download My Resume
            </button>
          </div>
        </div>

        <div className="w-full md:w-[30%]">
          <Lottie animationData={developerImage} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-20">
        <div className="w-full md:w-[50%]">
          <Lottie animationData={manSittingWithLaptop} />
        </div>
        <div className="w-full md:w-[50%] ml-5">
          <h1 className="text-[56px] font-normal my-10 dark:text-white">What I do </h1>
          <p className="my-10 text-[#868e96] dark:text-white">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <div className="dev-icons">
            <div className="inline-block mr-5 mb-5 group" name="html-5">
              <FontAwesomeIcon
                icon={faHtml5}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                html-5
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="css3">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                CSS3
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="sass">
              <FontAwesomeIcon
                icon={faSass}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Sass
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="JavaScript">
              <FontAwesomeIcon
                icon={faJs}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                JavaScript
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="reactjs">
              <FontAwesomeIcon
                icon={faReact}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                React.js
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="nodejs">
              <FontAwesomeIcon
                icon={faNode}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Node.js
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="swift">
              <FontAwesomeIcon
                icon={faSwift}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Swift
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="npm">
              <FontAwesomeIcon
                icon={faNpm}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                NPM
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="sql-database">
              <FontAwesomeIcon
                icon={faSolidDatabase}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                SQL Database
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="aws">
              <FontAwesomeIcon
                icon={faAws}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                AWS
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="firebase">
              <FontAwesomeIcon
                icon={faFireAlt}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Firebase
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="python">
              <FontAwesomeIcon
                icon={faPython}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Python
              </p>
            </div>
            <div className="inline-block mr-5 mb-5 group" name="docker">
              <FontAwesomeIcon
                icon={faDocker}
                className="mb-2 text-[#868e96] dark:text-white group-hover:text-[#407AFF]"
              />
              <p className="text-base text-[#868e96] dark:text-white group-hover:text-[#407AFF]">
                Docker
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Progressive Web Applications ( PWA ) in normal and SPA Stacks
            </p>
            <p className="text-[#868e96] text-xl dark:text-white">
              <img
                alt="⚡"
                draggable="false"
                src="http://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                className="inline h-[1em] w-[1em] mx-[0.05em] ml-[0.1em] my-0 align-[-0.1em]"
              />{" "}
              Integration of third party services such as Firebase/ AWS /
              Digital Ocean
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-20">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[56px] font-normal my-10 dark:text-white">Proficiency</h1>

          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">Frontend/Design</p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#AAA5FF] h-full rounded-full"
                style={{ width: "90%" }}
              ></span>
            </div>
          </div>
          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">Programming</p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#AAA5FF] h-full rounded-full"
                style={{ width: "70%" }}
              ></span>
            </div>
          </div>
          <div className="skill">
            <p className="my-5 text-[#676767] dark:text-white">Backend</p>
            <div className="meter bg-gray-200 rounded-full h-5 relative">
              <span
                className="block bg-[#AAA5FF] h-full rounded-full"
                style={{ width: "40%" }}
              ></span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Lottie animationData={buildingBlocks} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
