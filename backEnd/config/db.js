const { connect } = require("mongoose");

exports.DBConnection = async () => {
    try {
        await connect("mongodb://127.0.0.1:27017/Restaurant",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("DB connected");
    } catch (error) {
        if (error) throw error
    }
}