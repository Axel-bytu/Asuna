import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await truth(), watermark, [
    ['verdad', `${usedPrefix}verdad`],
    ['reto', `${usedPrefix}reto`]
], m)

handler.help = ['verdad']
handler.tags = ['quotes', 'fun']
handler.command = /^(verdad)$/i

export default handler
