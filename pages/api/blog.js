// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'fs'



// export default function handler(req, res) {
  
  // fs.readFile('BlogsData/how-to-learn-javascript.json', 'utf-8',(err,data)=>{
  //   console.log('')
  //   res.status(200).json(JSON.parse(data))
  // })
// }
import * as fs from 'fs'



export default async function handler(req, res) {
  
  let data = await fs.promises.readdir('BlogsData')
  let myfile;
  let allBlogs =[];
  
  for(let i=0 ; i<data.length; i++){
            // console.log(data[i])
          myfile = await  fs.promises.readFile(`BlogsData/${data[i]}` , 'utf-8')
          // console.log(myfile)
          allBlogs.push(JSON.parse(myfile))
        }
        // console.log(allBlogs);
         res.status(200).json(allBlogs)
      }
  
  // fs.promises.readdir('BlogsData', 'utf-8',(err,data)=>{
  //   console.log(data)
  //   // for(let i=0 ; i<data.length; i++){
  //   //   console.log(data[i])
  //   // }
  //   let allBlogs =[];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(`blogdata/${item}` ,(err,data)=>{
  //       allBlogs.push(data)
  //     })
  //   })
   
  
  // })

 