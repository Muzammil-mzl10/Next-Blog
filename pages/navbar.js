import react from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog Post</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us </a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};
export default Navbar;
