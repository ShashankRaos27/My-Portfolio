import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-5">
      <div>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Shashank Rao</span>
          <span className="grey-color">/&gt;</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <div className="py-4 px-5">
          <a href="#skills">Skills</a>
        </div>
        <div className="py-4 px-5">
          <a href="#experience">Work Experiences</a>
        </div>
        <div className="py-4 px-5">
          <a href="#opensource">Open Source</a>
        </div>
        <div className="py-4 px-5">
          <a href="#achievements">Achievements</a>
        </div>
        <div className="py-4 px-5">
          <a href="#blogs">Blogs</a>
        </div>
        <div className="py-4 px-5">
          <a href="#talks">Talks</a>
        </div>
        <div className="py-4 px-5">
          <a href="#resume">Resume</a>
        </div>
        <div className="py-4 px-5">
          <a href="#contact">Contact Me</a>
        </div>
        <div className="py-4 px-5">
          <a>
            <label class="switch">
              <input type="checkbox" />
              <span class="sdivder round">
                <span class="emoji">
                  <img
                    alt="☀️"
                    draggable="false"
                    src="http://cdnjs.cloudflare.com/ajax/divbs/twemoji/14.0.2/72x72/2600.png"
                    className="h-4 w-4 mx-0.5 my-0.5 mt-0.5 mb-0.5 align-middle"
                  />
                </span>
              </span>
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
