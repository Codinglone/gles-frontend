import React from 'react'
import { Footer } from 'flowbite-react'
import { FaFacebook, FaInstagram, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"

const FooterSection = () => {
  return (
    <>
        <Footer container>
  <div className="w-full">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <Footer.Brand
          alt="Flowbite Logo"
          href="/"
          name="E-APPLY"
          src="https://svgsilh.com/svg/1547551.svg"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="about" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">
              Flowbite
            </Footer.Link>
            <Footer.Link href="#">
              Tailwind CSS
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">
              Github
            </Footer.Link>
            <Footer.Link href="#">
              Discord
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        by="Flowbite™"
        href="#"
        year={2022}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="#"
          icon={FaFacebook}
        />
        <Footer.Icon
          href="#"
          icon={FaInstagram}
        />
        <Footer.Icon
          href="#"
          icon={FaGithub}
        />
        <Footer.Icon
          href="#"
          icon={FaGoogle}
        />
        <Footer.Icon
          href="#"
          icon={FaTwitter}
        />
      </div>
    </div>
  </div>
</Footer>
    </>
  )
}

export default FooterSection