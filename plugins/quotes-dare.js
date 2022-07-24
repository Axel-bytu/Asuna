import { dare } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await dare(), watermark, [
    ['reto', `${usedPrefix}reto`], 
    ['verdad', `${usedPrefix}verdad`]
], m)

handler.help = ['reto']
handler.tags = ['quotes', 'fun']
handler.command = /^(reto)$/i

export default handler
