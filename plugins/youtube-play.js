import yts from 'yt-search'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async(m, { conn, usedPrefix, text, command, args }) => {
    let user = m.sender
    let name = conn.getName(user)
    if (!text) throw `¡Por favor ingrese una consulta!\n\nEjemplo: ${usedPrefix + command} Dead to me`
    let results = await yts(text)
    let vid = results.all.find(video => video.seconds < 3600)
    if (!vid) throw 'Contenido no encontrado'
    const { thumbnail, audio: _audio, title } = await youtubedl(vid.url).catch(async _ => await youtubedlv2(vid.url)).catch(async _ => await youtubedlv3(vid.url))
    let audio, source, res, link, lastError
    for (let i in _audio) {
        try {
            audio = _audio[i]
            link = await audio.download()
            if (link) res = await fetch(link)
            if (res) source = await res.arrayBuffer()
            if (source instanceof ArrayBuffer) break
        } catch (e) {
            audio = link = source = null
            lastError = e
        }
    }
    if ((!(source instanceof ArrayBuffer) || !link || !res.ok)) throw 'Error: ' + (lastError || 'Can\'t download audio')
    let capt = `
${title}
Solicitado por @${user.split`@`[0]}

El bot enviará automáticamente el archivo de audio.`
    const message = {
        image: { url: thumbnail},
        jpegThumbnail: await(await fetch(thumbnail)).buffer(),
        caption: capt,
        footer: watermark,
        mentions: [user],
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Open on Youtube',
                    url: vid.url
                }
            }, {
                quickReplyButton: {
                    displayText: 'Download mp4',
                    id: `.ytmp4 ${vid.url}`
                }
            }
        ]
    }
    await conn.sendMessage(m.chat, message, { quoted: m})
    // await conn.sendFile(m.chat, thumbnail, '', `${title}\nRequested by @${user.split`@`[0]}`, m, null, { mentions: [user]})
    await conn.sendFile(m.chat, source, title + '.mp3', null, m, null, { mimetype: 'audio/mp4' })
}
handler.command = /^(play|p)$/i
handler.tags = ['downloader']
handler.help = ['play']
export default handler
