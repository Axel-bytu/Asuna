import fetch from 'node-fetch'
import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Masukkan URL Facebook yang ingin di download!\n\nContoh: ${usedPrefix + command} https://www.facebook.com/100009307660961/videos/2850837675236460/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, watermark, m, false, { contextInfo: {
        externalAdReply: {
            title: 'Download via web',
            body: 'Haruno',
            thumbnail: await(await fetch(image)).buffer(),
            sourceUrl: url
        }
    }})
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
