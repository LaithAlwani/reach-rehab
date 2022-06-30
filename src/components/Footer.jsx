import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <FaTiktok />
        </a>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaPinterest />
        </a>
      </div>
      <span>&copy; Reach Rehab 2022</span>
    </footer>
  );
}
