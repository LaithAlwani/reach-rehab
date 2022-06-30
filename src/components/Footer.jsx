import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://instagram.com/reach.rehab">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UC-yypLnEiwCHEZt0dax3HvA">
          <FaYoutube />
        </a>
        <a href="https://www.tiktok.com/@reach.rehab">
          <FaTiktok />
        </a>
        <a href="https://www.facebook.com/reachrehabbers/">
          <FaFacebook />
        </a>
        <a href="https://pin.it/DF5U2Gr">
          <FaPinterest />
        </a>
      </div>
      <span>&copy; Reach Rehab 2022, Saskatchewan Canada</span>
    </footer>
  );
}
