import React from "react";
import { Image } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer  ">
      <div className=" footer--container ">
        <div className="">
          <h4 className="mt-5 pt-5 footer--title">empresa</h4>
          <p className="footer--description">
            {" "}
            lorem20 melali melalimelali melalimelali melalimelali melal melali
            melalimelali melalimelali melali imelali melali.
          </p>
          <div>
            <Image
              className="img-icon"
              src="../../img/fb-icon.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
            <Image
              className="img-icon"
              src="../../img/fb-icon.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
            <Image
              className="img-icon"
              src="../../img/fb-icon.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
            <Image
              className="img-icon"
              src="../../img/fb-icon.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </div>
        </div>
        <div>
          <div className="footer--items">Suport</div>
          <div className="footer--subItems">
            <div>Facebook integration</div>
            <div>Business Marketing</div>
            <div>Facebook integration</div>
          </div>
        </div>
        <div>
          <div className="footer--items">More Info</div>
          <div className="footer--subItems">
            <div>Facebook integration</div>
            <div>Business Marketing</div>
            <div>Facebook integration</div>
          </div>
        </div>
        <div>
          <div className="footer--items">Resources</div>
          <div className="footer--subItems">
            <div>Facebook integration</div>
            <div>Business Marketing</div>
            <div>Facebook integration</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
