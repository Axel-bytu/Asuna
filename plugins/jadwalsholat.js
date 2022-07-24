import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Introduce la ciudad a buscar.\n\nEjemplo: ${usedPrefix + command} Quito`
    const res = await jadwalsholat(text)
    m.reply(`
Horario de oración ${text}

${Object.entries(res.today).map(([name, data]) => `Sholat ${name}: ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler
