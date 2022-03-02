import * as fs from 'fs'

export default async function handler(req, res) {
  
    let data = await fs.promises.readdir('BlogsData')
    let myfile;
    let allBlogs =[];
    console.log(req.query.slug)
    for(let i=0 ; i<data.length; i++){
              // console.log(data[i])
            myfile = await  fs.promises.readFile(`BlogsData/${data[i]}` , 'utf-8')
            // console.log( JSON.parse(myfile).Slug)

            if(req.query.slug ==  JSON.parse(myfile).Slug)
            {allBlogs.push(JSON.parse(myfile))}
            

          }
          // console.log(allBlogs);
          if(allBlogs){
           res.status(200).json(allBlogs)
          }else{
                res.status(200).json({
                'error': "No Data Found"
            })
          }

}