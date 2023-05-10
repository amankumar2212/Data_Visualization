const express = require("express");
const router = express.Router();
const User = require('../../models/dataSchema');


router.get('/getdata', (req, res) => {

    try {
        User.find()
            .then((result) => {
                res.json(result);
            }).catch((err) => {
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
})
router.post('/visual',async(req, res) => {

    try {
        const {
            end_year,
            intensity,
            sector,
            topic,
            insight,
            url,
            region,
            start_year,
            impact,
            added,
            published,
            country,
            relevance,
            pestle,
            source,
            title,
            likelihood
        } = req.body

        let match = {}

        if (intensity) {
            match.intensity = parseInt(intensity)
        }
        if (end_year) {
            match.end_year = parseInt(end_year)
        }
        if (relevance) {
            match.relevance = parseInt(relevance)
        }
        if (likelihood) {
            match.likelihood = parseInt(likelihood)
        }
        if (start_year) {
            match.start_year = parseInt(start_year)
        }
        if (added) {
            match.added = new Date(added)
        }
        if (title) {
            match.title = new RegExp(title, "i")
        }
        if (pestle) {
            match.pestle = new RegExp(pestle, "i")
        }
        if (sector) {
            match.sector = new RegExp(sector, "i")
        }
        if (insight) {
            match.insight = new RegExp(insight, "i")
        }
        if (published) {
            match.published = new RegExp(published, "i")
        }
        if (country) {
            match.country = new Date(country)
        }
        if (impact) {
            match.impact = new RegExp(impact, "i")
        }
        if (region) {
            match.region = new RegExp(region, "i")
        }
        if (url) {
            match.url = new RegExp(url, "i")
        }
        if (source) {
            match.source = new RegExp(source, "i")
        }
        if (topic) {
            match.topic = new RegExp(topic, "i")
        }
        const response = await User.aggregate([{
            $match: match
        }]);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
})


module.exports = router