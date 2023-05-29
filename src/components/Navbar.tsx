import { useState } from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import { IoSchool } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs"
const Nav = () => {
  return (
    <>
      <Navbar fluid rounded className="shadow-lg">
        <Navbar.Brand className="text-blue-700" href="#">
            <IoSchool className="mr-3 h-6 sm:h-9" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-APPLY
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button gradientDuoTone="purpleToBlue">Get Started <BsArrowRight className="ml-2 font-bold" /></Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-blue-700" href="/navbars">
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Gallery</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
          <Dropdown
      inline
      label="Services"
    >
      <Dropdown.Header>
        <span className="block text-sm">
          E-Apply Services
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Study Abroad
      </Dropdown.Item>
      <Dropdown.Item>
        Register School
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        More info
      </Dropdown.Item>
    </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
