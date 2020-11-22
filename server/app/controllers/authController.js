const API_URL = process.env.SWAPI_API;
const jwtUtils = require('../utils/jwt.utils');

const authController = {
    loginAction: async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body;

            if (username === 'Luke' && password === 'DadSucks') {
                const user = {
                    id: 1,
                    username: 'Luke',
                }
                const userToken = jwtUtils.generateTokenForUser(user);
                res.send({
                    success: true,
                    message: 'Vous pouvez passer :)',
                    user,
                    userToken,
                });
            } else {
                res.status(401).send({
                    success: false,
                    message: 'mot de passe ou pseudo incorrect'
                }).end();
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }
};

module.exports = authController;

