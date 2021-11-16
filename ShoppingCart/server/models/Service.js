const mongoose = require('mongoose')


const Service = mongoose.model("Service",ServiceSchema)
module.exports = Service;