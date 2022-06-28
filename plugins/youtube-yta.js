import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
// import db from '../lib/database.js'
import fetch from 'node-fetch'

let limit = 80
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw `Harap masukkan URL Youtube yang ingin di download!\n\nContoh: ${usedPrefix + command} https://youtu.be/zyJJlPSeEpo`
  let chat = db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
Judul: ${title}
Filesize ${audio.fileSizeH}
`.trim(), m, false, { contextInfo: {
  externalAdReply: {
    title: `${isLimit ? 'Click here to download' : 'Download via web'}`,
    body: 'Haruno bot',
    thumbnailUrl: 'https://telegra.ph/file/37419ad0bce2a83dc6f5e.jpg',
    sourceUrl: link
  }
}})
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', `
Judul: ${title}
Filesize: ${audio.fileSizeH}
`.trim(), m, null, {
    mimetype: 'audio/mp4',
    asDocument: chat.useDocument
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.limit = true

handler.exp = 0

export default handler



