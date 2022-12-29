import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next'

import {formidable,Fields,Files} from "formidable"

import {File, NFTStorage} from "nft.storage"
import {readFileSync } from "fs"

type Reqprops={
    fields:Fields,
    files:Files
}
const api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZCNzBBZDQ2ODQyOTI1QUQ4ZjUwNjJiODQxNzNBYUUyYTdDNTliNzciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Nzg4ODA0MjQxMCwibmFtZSI6IlN1amFuTmZ0TWFya2V0In0.zg7sED2RoJDuDwwacnYXWkkeoL8-YFoXIAKeirHrrvQ"
const client = new NFTStorage({token:api_key})
const parseForm = (req:any) => {
    return new Promise((resolve, reject) => {
        const form = formidable() 
        form.parse(req, (err, fields, files)=>{
            if (err) {
                reject(err)
            }
            resolve({fields, files})
        })
    })
}
const handler = async (req:NextApiRequest, res:NextApiResponse) => {
   
const {fields, files}= await parseForm(req) as any
const {
    filepath,
    originalFilename = "image",
    mimetype = "image",
  } = files.image;
  const buffer = readFileSync(filepath);
  const arraybuffer = Uint8Array.from(buffer).buffer;
  const file= new File([arraybuffer], originalFilename, {
    type: mimetype,
  });


const metadata = await client.store({
    name:fields.name,
    description:fields.description,
    image:file,
    price : fields.price

})
res.json({uri:metadata.url})
}
export default handler

export const config = {
    api:{
        bodyParser:false
    }
}