import yts from 'yt-search'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `¡Por favor ingrese la consulta que desea buscar!\n\nEjemplo: ${usedPrefix + command} video protes tiananmen square 1989`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
Título: ${v.title}
Link: ${v.url}
Duración: ${v.timestamp}
Subido: ${v.ago}
Audiencia: ${v.views}
      `.trim()
      case 'channel': return `
Nombre: ${v.name}
Link: ${v.url}
Subscriber: ${v.subCountLabel} (${v.subCount})
Video: ${v.videoCount}
`.trim()
    }
  }).filter(v => v).join('\n────────────────────\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i
export default handler
