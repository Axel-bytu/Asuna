import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Responda a videos o notas de voz que desea convertir en audio con subtítulos ${usedPrefix + command}`
    let media = await q.download?.()
    if (!media) throw 'Can\'t download media'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Can\'t convert media to audio'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 <reply>']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler
