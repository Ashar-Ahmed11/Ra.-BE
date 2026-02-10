const express = require('express')
const router = express.Router()
const sharp = require('sharp');




router.post('/',async(req,res)=>{

    try {
      
    //     const file = req.files.image   
    // const newImg = await sharp(file.tempFilePath).toFormat('heif', { quality: 30, compression: 'av1' }).toFile('output.avif')
    
    // res.send(newImg)
    const metadata = sharp('./output.avif').metadata()

  console.log(metadata)

} catch (error) {
    console.error(error.message)
    res.status(500).send("SOME INTERNAL SERVER ERROR") 
 }
})

module.exports = router