import { useState } from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import { IoSchool } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Navbar fluid rounded className="shadow-lg">
        <Navbar.Brand className="text-blue-900" href="#">
          <IoSchool className="mr-3 h-6 sm:h-9" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-APPLY
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="/start">
            <Button gradientDuoTone="purpleToBlue">
              Get Started <BsArrowRight className="ml-2 font-bold" />
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-blue-700">
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/gallery">Gallery</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
          <Dropdown inline label="Services">
            <Dropdown.Header>
              <span className="block text-sm">E-Apply Services</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/study">Study abroad</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/register-school">Register school</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to="/more-info">More info</Link>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
