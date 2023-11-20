import express from "express";
import  {signup,login}  from "../controllers/auth.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)

// router.get('/profile',auth,profile)

export default router