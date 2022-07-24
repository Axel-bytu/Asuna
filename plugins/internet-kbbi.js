import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Ingrese la palabra que desea buscar.\n\nEjemplo: ${usedPrefix + command} Arunika`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
Subjek: ${v.title}

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Nota:
p = Partículas: clase de palabras que incluye preposiciones, conjunciones, interjecciones, artículos, saludos
n = sustantivo: sustantivo
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler
