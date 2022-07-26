import fetch from 'node-fetch'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Ingrese la URL de Instagram que desea descargar.\n\nEjemplo: ${usedPrefix + command} https://www.instagram.com/p/CfDVJyOPsqF/?utm_source=ig_web_copy_link`
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', watermark, m, false, { contextInfo: {
        externalAdReply: {
            title: 'Download via web',
            body: 'Haruno',
            thumbnail: await(await fetch(image)).buffer(),
            sourceUrl: url
        }
    }})
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

export default handler
