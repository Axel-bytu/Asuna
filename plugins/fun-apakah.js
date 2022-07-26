let handler = async (m) => m.reply(`
*Pregunta:* ${m.text}
*Respuesta:* ${['Ya', 'Quizás sí', 'Probablemente', 'Quizás no', 'No', 'De ninguna manera'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['pregunta <teks>?']
handler.tags = ['fun']
handler.customPrefix = /(\?$)/
handler.command = /^pregunta$/i

export default handler
