import mongoose from 'mongoose'

export let MissionScheme = new mongoose.Schema({
  images: Array,
  text: String,
  text_en: String
})
// {
//     description: String,
//     description_en: String,
//     url: String
//   }
export let Mission = mongoose.model('Mission', MissionScheme)
