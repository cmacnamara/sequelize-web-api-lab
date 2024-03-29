const { Guitar } = require('../models')

const create = async (req, res) => {
  try {
    const guitar = await Guitar.create(req.body)
    res.status(200).json(guitar)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const guitar = await Guitar.findAll()
    res.status(200).json(guitar)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const guitar = await Guitar.findByPk(req.params.guitarId)
    guitar.set(req.body)
    await guitar.save()
    res.status(200).json(guitar)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteGuitar = async (req, res) => {
  try {
    const guitar = await Guitar.findByPk(req.params.guitarId)
    await guitar.destroy()
    res.status(200).json(guitar)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteGuitar,
}