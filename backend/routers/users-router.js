import express from 'express';
import User from '../db/models/user-model';

const router = express.Router();

router.post('/register', (req, res) => {
    let data = req.body;
    let user = new User(data);
    user.save();
    console.log(data);
    res.send({msg: 'User registered successfully'});
});