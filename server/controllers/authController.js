const API_URL = process.env.SWAPI_API;

const authController = {
    loginAction: async (req, res) => {
        try {
            const {
                username,
                password
            } = req.body;
            // console.log('email', req.body.username);
            if (username === 'Luke' && password === 'DadSucks') {
                res.send({
                    success: true,
                    message: 'Vous pouvez passer :)'
                });
            } else {
                console.log('<< 401 UNAUTHORIZED');
                console.log('<< mot de passe incorrect');
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

