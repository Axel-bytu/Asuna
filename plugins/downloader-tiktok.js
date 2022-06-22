import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Harap masukkan URL sebagai parameter!\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSe5pocWX/`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    conn.sendFile(m.chat, video.no_watermark_hd, 'tiktok.mp4', watermark, m, false, { contextInfo: {
        externalAdReply: {
            title: 'Download via web',
            body: 'Haruno',
            thumbnail: await(await fetch(image)).buffer(),
            sourceUrl: video.no_watermark_hd
        }
    }})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

export default handler