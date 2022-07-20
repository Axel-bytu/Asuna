import * as baileys from '@adiwajshing/baileys'
import { Brainly } from 'brainly-scraper-v2'
import fetch from 'node-fetch'
let brainly = new Brainly('id')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Introduce la pregunta que buscas.\n\nEjemplo: ${ usedPrefix + command } Determine el área de la parte sombreada`
	let res = await brainly.search(text, 'id').catch(() => null)
	console.log(res)
		let answer = res.map(({ question, answers }, i) => `
*Pregunta*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
*Respuesta para ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n' + '-'.repeat(45))
		m.reply(answer.trim())
}
handler.help = ['brainly']
handler.tags = ['tools']
handler.command = /^(brainly)$/i

export default handler
