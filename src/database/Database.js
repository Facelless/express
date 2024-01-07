const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.connect(
            '' //url mongo
        );

        console.log('Database connected')
    } catch(err) {
        console.log(`ERRO: ${err}`)
    }
}

module.exports = connect;