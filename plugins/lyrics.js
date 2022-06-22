import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Masukkan judul lagunya.\n\nContoh: ${usedPrefix + command} Yoasobi yoru ni kakeru`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    let copy = result.lyrics.replace('/n', ' ')
    let capt = `
*${result.title}*
Author: ${result.author}


${result.lyrics}


Url ${result.link}
`.trim()
    const message = {
        caption: capt,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Copy lyrics',
                    url: 'https://www.whatsapp.com/otp/copy/' + copy
                }
            }, {
                quickReplyButton: {
                    displayText: 'Translate lyrics',
                    id: '.translate id ' + copy
                } 
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m })
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler