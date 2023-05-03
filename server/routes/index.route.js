import { Router } from "express";
import querystring from 'querystring'
import crypto from 'crypto'
import { config } from 'dotenv'


config()

const redirect_uri = 'http://localhost:6060/callback'
const router = Router()

router.get('/login', (req, res) => {

    const state = crypto.randomBytes(64).toString('hex')
    const scope = 'user-read-private user-read-email'

    res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({ scope, state, redirect_uri, client_id: process.env.CLIENT_ID })}`)
})

export default router