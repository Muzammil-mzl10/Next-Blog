
import * as fs from 'fs'



export default async function handler(req, res) {
  
  let data = await fs.promises.readdir('BlogsData')
  let myfile;
  let allBlogs =[];
  
  for(let i=0 ; i<data.length; i++){
            // console.log(data[i])
          myfile = await  fs.promises.readFile(`BlogsData/${data[i]}` , 'utf-8')
          
          allBlogs.push(JSON.parse(myfile))
        }
        
         res.status(200).json(allBlogs)
      }
  
 
 