import react from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const Slug = ()=>{
    const router = useRouter();
      const {slug} =  router.query;
    return(<>
    <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />

        <div className={styles.container}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellendus, nam magnam dolores libero blanditiis repudiandae asperiores eaque, aperiam tenetur similique praesentium cumque, tempora quibusdam sint in! Fuga ea fugit consectetur cupiditate impedit nam exercitationem animi necessitatibus et. Aliquam voluptas voluptatum quo officiis sequi placeat!
        </div>
        </main>
    </>)
}
export default Slug;