import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style jsx>{``}</style>
      <div className={styles.container}>
        <Head>
          <title>Hunting Coder</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="" />

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

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Hunting Coder</a>
          </h1>
          <div className={styles.home_img}>
            <Image
            
             lazyBoundary="200px"
              src="/hunting_coder.jpg"
              width={870 / 3}
              height={580 / 3}
              alt="Hunting Coder"
            />
          </div>
          <p className={styles.description}>
            A Blog for Hunting Coder
            <code className={styles.code}></code>
          </p>

          <div className="blogs">
            <h2> Popular Blogs</h2>
            <div className="blogItems">
              <h3>How to Learn Javascript in 2022?</h3>
              <p>Javascript is used to design Backend for the website</p>
            </div>
            <div className="blogItems">
              <h3>How to Learn Javascript in 2022? </h3>
              <p>Javascript is used to design Backend for the website</p>
            </div>
            <div className="blogItems">
              <h3>How to Learn Javascript in 2022? </h3>
              <p>Javascript is used to design Backend for the website</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
