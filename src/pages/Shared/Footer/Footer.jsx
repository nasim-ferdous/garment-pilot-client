import React from "react";
import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-indigo-400 dark:bg-zinc-600 text-primary-content p-10">
      <aside>
        <Link to={"/"} className="font-bold text-2xl">
          GarmentPilot
        </Link>
        <p className="font-bold">
          GarmentPilot Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaSquareXTwitter />
          </a>
          <a>
            <FaFacebookF></FaFacebookF>
          </a>
          <a>
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
