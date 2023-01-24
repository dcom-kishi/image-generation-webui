var express = require('express');
var axios = require("axios")
var router = express.Router();

const COLAB_URL = 'https://stable-diffusion-web-ui-v21.loca.lt'

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET images listing. */
router.post('/txt2img', function (req, res, next) {
    console.log("req:", req.body);
    axios.post(COLAB_URL + "/sdapi/v1/txt2img", req.body)
        .then(response => res.json(response.data))
        .catch(err => console.error(err));
});

module.exports = router;
