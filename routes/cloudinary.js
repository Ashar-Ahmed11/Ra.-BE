const express = require('express')
const router = express.Router()



const Tesseract= require('tesseract.js');




router.post('/', async(req, res) => {


    try {
        
    // const file = req.files.photo
    // const result = await cloudinary.uploader.upload(file.tempFilePath,{ocr:'adv_ocr'})
    // const result = await tesseract.recognize(file.tempFilePath)


    const result = await Tesseract.recognize(
        // this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
        'https://tesseract.projectnaptha.com/img/eng_bw.png',
        // this second argument is for the laguage 
        'eng',
        { logger: m => console.log(m) }
        )

    res.send(result.data.text)
    
} catch (error) {
    console.error(error.message)
    res.status(500).send('Internal Server Error')
}
})


module.exports = router