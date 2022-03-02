import react, { useState , useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const Slug = (props)=>{
  // console.log(props.data1[0].Content)
  const [Para , SetPara]= useState(props.data1[0]);
  
  
  
  const router = useRouter();
  const {slug} =  router.query;
  

    return(<>
    <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />

        <div className={styles.container}>
        {Para.Content}
        </div>
        </main>
    </>)
}

export async function getServerSideProps(context) {


  // const router = useRouter();
  const {slug} =  context.query;
  console.log(slug);
  let data = await fetch(`http://localhost:3000/api/getblogdata?slug=${slug}`)
   let data1 = await data.json()


  return {
    props: {data1}, 
  }
}

export default Slug;