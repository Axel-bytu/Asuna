import { bucin } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, command }) => conn.sendButton(m.chat, await bucin(), watermark, [
    ['Next', `${usedPrefix+command}`], 
], m)

handler.help = ['bucin']
handler.tags = ['fun']
handler.command = /^(bucin)$/i

export default handler
