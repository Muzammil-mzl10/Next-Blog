import react from "react";
import { useRouter } from "next/router";
const Slug = ()=>{
    const router = useRouter();
      const {slug} =  router.query;
    return(<>
        <h1>This is React {slug}</h1>
    </>)
}
export default Slug;