const mongoose = require("mongoose")

const gossipSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        default: "Anonymous"
    },
    created_at:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Gossip", gossipSchema)