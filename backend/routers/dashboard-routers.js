import express from "express";
import auth from "../middlewares/auth.js";

const router = express.Router();


router.get('/dashboard',  (req, res) => {

    res.status(200).send({msg: 'Dashboard data', data: 'This is dashboard data'});

});

router.get('/dashboard2', (req, res) => {

    res.status(200).send({msg: 'Dashboard data', data: 'This is dashboard 2 data'});
});

export default router;