import { extract } from 'zs-extract'
import { lookup } from 'mime-types'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Ingrese la URL zippyshare que desea descargar.\n\nEjemplo: ${usedPrefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`
  if (!args[0].includes('zippyshare.com')) throw '¡URL no válida!\nAsegúrese de que la URL sea una URL zippyshare.'
  await m.reply(wait)
  for (let i = 0; i < args.length; i++) {
    if (!args[i].includes('zippyshare.com/v')) continue
    let res = await extract(args[i])
    let mimetype = await lookup(res.download)
    conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
  }
}
handler.help = ['zippyshare']
handler.tags = ['downloader']
handler.command = /^z(s|ippy(dl|share)?)$/i 

export default handler
