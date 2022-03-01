import react from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = ()=>{
    return(<>
    <div className={styles.container}>
    <main className={styles.main}>
        <h1>This is React Blog</h1>
        <div className="blogs">
            <h2> Latest Blogs</h2>
            <div className="blogItems">
            <Link href={'/blogpost/learn-javascript'}>
                <a >        <h3>How to Learn Javascript in 2022?</h3>
              <p>Javascript is used to design Backend for the website</p></a>
            </Link>

      
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
    </>)
}
export default Blog;