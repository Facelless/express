const {Service: ServiceModel} = require("../models/Service")

const serviceController = {
    create: async(req, res) => {
        try {

            const service = {
                title: req.body.title,
                description: req.body.description,
                data: req.body.data,
                userId: req.body.userId
            };

            const response = await ServiceModel.create(service);
            res.status(201).json({response, msg:'Service create'})

        } catch (err) {
            console.log(`ERRO: ${err}`)
        }
    }
}

module.exports = serviceController