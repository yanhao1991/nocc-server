import express from 'express'
import { Mission } from '../models/mission'

let router = express.Router()

let recordId

// 初始化
Mission.find((err, old) => {
  if (!old || old.length == 0) {
    let mission = new Mission({
      images: []
    })
    mission.save((err, s) => {
      if (err) {
        throw '初始化 mission 失败'
      }
      recordId = s._id
      console.log('Mission Id', recordId)
    })
  } else {
    recordId = old[0]._id
    console.log('Old Mission Id', recordId)
  }
})

router.post('/patch', (req, res) => {
  Mission.findById(recordId, (err, record) => {
    if (err) {
      return res.status(404).json(err)
    }
    Object.assign(record, req.body)
    record.save(err => {
      if (err) {
        return res.status(500).json(err)
      }
      return res.json(record)
    })
  })
})

router.get('/', (req, res) => {
  Mission.findById(recordId, (err, event) => {
    if (err) {
      return res.status(404).json(err)
    }
    return res.json(event)
  })
})

export default router
