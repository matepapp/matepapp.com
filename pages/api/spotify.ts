import { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

async function getRecentlyPlayed() {
  const { access_token } = await getAccessToken()
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=12', {
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })

  const data = await response.json()

  return data.items?.map(({ track }) => {
    return {
      id: track.id,
      artist: track.artists.map((artist) => artist.name).join(', '),
      name: track.name,
      url: track.external_urls.spotify,
      image: { ...track.album.images[0] },
    }
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const recentlyPlayed = await getRecentlyPlayed()

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')
  return res.status(200).json(recentlyPlayed)
}
