import { Button, InputGroup,FormControl } from "react-bootstrap";
import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs--container">
        <div className="aboutUs--subtitle ">Simple, Easy Web Hosting </div>
        <div className="aboutUs--title">
          Best Domain Hosting Provider For Your Business
        </div>
        <div className="aboutUs--description">
          Etiam sed.Interdum consequat proin vestibulum class a euismod mus
          luctus quam amet, constur adipisicing eli.
        </div>
        <div className="">
          <InputGroup className="">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />{" "}
            <Button>Search Now</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
