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
import "./UserInfo.css";
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

        <div className="w-[30%]">
          <Lottie animationData={developerImage} />
        </div>
      </div>
      <div className="flex w-full mt-20">
        <div className="w-[40%]">
          <Lottie animationData={manSittingWithLaptop} />
        </div>
        <div className="w-[60%]">
          <h1>What I do </h1>
          <div className="dev-icons">
            <div className="inline-block mr-5 mb-5" name="html-5">
              <FontAwesomeIcon icon={faHtml5} className="mb-5" />
              <p>HTML5</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="css3">
              <FontAwesomeIcon icon={faCss3Alt} className="mb-5" />
              <p>CSS3</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="sass">
              <FontAwesomeIcon icon={faSass} className="mb-5" />
              <p>Sass</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="JavaScript">
              <FontAwesomeIcon icon={faJs} className="mb-5" />
              <p>JavaScript</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="reactjs">
              <FontAwesomeIcon icon={faReact} className="mb-5" />
              <p>React.js</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="nodejs">
              <FontAwesomeIcon icon={faNode} className="mb-5" />
              <p>Node.js</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="swift">
              <FontAwesomeIcon icon={faSwift} className="mb-5" />
              <p>Swift</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="npm">
              <FontAwesomeIcon icon={faNpm} className="mb-5" />
              <p>NPM</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="sql-database">
              <FontAwesomeIcon icon={faSolidDatabase} className="mb-5" />
              <p>SQL Database</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="aws">
              <FontAwesomeIcon icon={faAws} className="mb-5" />
              <p>AWS</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="firebase">
              <FontAwesomeIcon icon={faFireAlt} className="mb-5" />
              <p>Firebase</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="python">
              <FontAwesomeIcon icon={faPython} className="mb-5" />
              <p>Python</p>
            </div>
            <div className="inline-block mr-5 mb-5" name="docker">
              <FontAwesomeIcon icon={faDocker} className="mb-5" />
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
