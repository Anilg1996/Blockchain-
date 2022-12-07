const axios = require("axios")
const coinModel = require("../model/coinModel")

const coin = async (req, res) => {
    try {
        let header1 = req.header('Authorization')
        let accessToken = "e257d206-bca7-4e7c-ab52-e2374b69b25c"
        if (!header1) {return res.status(400).send({status: false, message: "API key in header is required"})}
        if (header1 != `Bearer ${accessToken}`) return res.status(401).send({status:" false", message: "Unauthorized"})
        
        let options = {
            method: 'Get',
            url: 'https://api.coincap.io/v2/assets',

        }
        let result = await axios(options);
        
        let coins = result.data.data
        let sortedCoin = coins.sort((a,b)=> a.changePercent24Hr - b.changePercent24Hr)
        let coinData = await coinModel.insertMany(sortedCoin)

        res.status(200).send({status: true, data: coinData})
     
        
    } catch (err) {
        //console.log(err)
        res.status(500).send({
            msg: err.message
        })
    }
}

module.exports={coin}