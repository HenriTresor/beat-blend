import { Router } from "express";
import querystring from 'querystring'
import crypto from 'crypto'
import { config } from 'dotenv'
// import SpotifyWebApiNode from 'spotify-web-api-node'
import request from "request";
import { Buffer } from "buffer";

config()

const redirect_uri = 'http://localhost:6060/callback'
const router = Router()

router.get('/login', (req, res) => {

    const state = crypto.randomBytes(16).toString('hex')
    const scope = 'user-read-private user-read-email streaming'
    res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({ client_id: process.env.CLIENT_ID, scope, state, redirect_uri, response_type: 'code' })}`)
})

router.get('/callback', async (req, res) => {
    let code = req.query.code || null
    let state = req.query.state || null

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code,
            redirect_uri: 'http://localhost:6060/callback',
            grant_type: 'authorization_code',

        },
        headers: {
            'Authorization': 'Basic ' + Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')
        }
    }

    request.post(authOptions, (err, response, body) => {
        if (err) {
            res.status(500).json(err)
            return
        }
        res.status(200).json(JSON.parse(body))
    })
})

export default router