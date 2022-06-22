import { Brainly } from 'brainly-scraper-v2'
const brainly = new Brainly('id')
let handler = async function (m, { text, usedPrefix, command }) {
    if (!text) throw `Harap masukkan soal yang ingin dicari.\n\nContoh: ${usedPrefix + command} Pak Rusdi memberikan iPhone kepada Dek Latifa, Apakah Latifa akan menerimanya dengan segala konsekuensi nya?`
  let res = await brainly.search('id', text)
  let answer = res.map(({ question, answers }, i) => `
*Pertanyaan ke ${i + 1}*
${formatTags(question.content)}${answers.map((v, i) => `
*Jawaban ke ${i + 1}*${v.verification ? ' (Terverifikasi)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${formatTags(v.content)}`).join``}`).join('\n\n────────────────────\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

export default handler

function formatTags(str) {
  let tagRegex = /<(.+?)>((?:.|\n)*?)<\/\1>/gi
  let replacer = (_, tag, inner) => {
    let a = inner.replace(tagRegex, replacer)
    let b = ''
    switch (tag) {
      case 'p':
        a += '\n'
        break
      case 'i':
        b = '_'
      case 'strikethrough':
        b = '~'
      case 'strong':
        b = '*'
        a = a.split('\n').map(a => a ? b + a + b : a).join('\n')
        break
    }
    return a
  }
  
  return str
    .replace(/<br *?\/?>/gi, '\n')
    .replace(tagRegex, replacer)
    .trim()
}