const mongoose = require("mongoose")

const { Schema } = mongoose;

const serviceSchema = new Schema(

    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
    
)

const Service = mongoose.model("Servicos", serviceSchema)

module.exports = {
    Service,
    serviceSchema
}