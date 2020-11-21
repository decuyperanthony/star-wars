const API_URL = process.env.SWAPI_API;
const axios = require('axios');

const homeController = {
    homeApi: async (req, res) => {
        try {
            res.send('Hello, welcome on Star Wars API');
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getAllSoldiers: async (req, res) => {
        try {
            let soldiers;
            await axios.get(`${API_URL}/people`)
                 .then((res) => {
                     soldiers = res.data;
                 })
                 .catch(err => console.trace(err));
                //  console.log('soldiers', soldiers)
                res.send(soldiers);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getSoldierByName: async (req, res) => {
        // https://swapi.dev/api/people/?search=r2
        let { search } = req.params;
        try {
            let soldiers;
            await axios.get(`${API_URL}/people/?search=${search}`)
                 .then((res) => {
                     console.log('res', res)
                     soldiers = res.data;
                 })
                 .catch(err => console.trace(err));
                //  console.log('soldiers', soldiers)
                res.send(soldiers);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
};

module.exports = homeController;

