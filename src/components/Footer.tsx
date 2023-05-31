import React from 'react'
import { Footer } from 'flowbite-react'
import { FaFacebook, FaInstagram, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"

const FooterSection = () => {
    const year = new Date().getFullYear()
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
              E-APPLY
            </Footer.Link>
            <Footer.Link href="#">
              Scholarship
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col>
            <Footer.Link href="github.com/Codinglone">
              Github
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/fabrice-niyokwizerwa-a8402225a/">
              LinkedIn
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
        by="E-APPLY"
        href="/"
        year={year}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="https://facebook.com"
          icon={FaFacebook}
        />
        <Footer.Icon
          href="https://instagram.com"
          icon={FaInstagram}
        />
        <Footer.Icon
          href="https://github.com/Codinglone"
          icon={FaGithub}
        />
        <Footer.Icon
          href="https://mail.google.com"
          icon={FaGoogle}
        />
        <Footer.Icon
          href="https://twitter.com"
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