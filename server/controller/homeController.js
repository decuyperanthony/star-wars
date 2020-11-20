const API_URL = process.env.SWAPI_API;

const homeController = {
    home: async (req, res) => {
        try {
            res.send('Hello, welcome on Star Wars API')
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
}