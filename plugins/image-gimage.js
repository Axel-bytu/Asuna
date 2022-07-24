import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Introduzca la consulta que desea encontrar!\n\nEjemplo: ${ usedPrefix + command } Shinao Hiiragi`
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', watermark, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler
