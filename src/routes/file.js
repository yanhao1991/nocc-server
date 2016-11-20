import express from 'express'
import { upload } from '../utils/file-upload'

let router = express.Router()

router.post('/', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json(req.file)
  } else {
    res.status(500).end()
  }
})
console.log(process.cwd() + '/public/upload')


export default router
