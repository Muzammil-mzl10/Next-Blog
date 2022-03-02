import react, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.myprops);
  // setblogs(this.props)

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          
          <h1>This is React Blog</h1>
          {blogs.map((data, key) => {
            return (
              <div className={styles.bloger} key={key}>
                <Link href={`/blogpost/${data.Slug}`}>
                  <a>
                    <h3 className={styles.blogsh3}>{data.title}</h3>
                    <p className={styles.blogspara}>{data.Content.substr(0,200)}</p>
                  </a>
                </Link>
              </div>
            );
          })}+

          
            {/* <h2> Latest Blogs</h2>

            <div className="blogItems1">
              <h3>How to Learn Javascript in 2022? </h3>
              <p>Javascript is used to design Backend for the website</p>
            </div>
            <div className="blogItems1">
              <h3>How to Learn Javascript in 2022? </h3>
              <p>Javascript is used to design Backend for the website</p>
            </div> */}
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("UseEffect is Running");
    let data = await  fetch("http://localhost:3000/api/blog")
    let myprops = await data.json();

  return {
    props: {myprops}, // will be passed to the page component as props
  }
}

export default Blog;
