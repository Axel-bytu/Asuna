let handler = async (m) => m.reply(`
*Pregunta:* ${m.text}
*Respuesta:* ${['Ya', 'Quizás sí', 'Probablemente', 'Quizás no', 'No', 'De ninguna manera'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

export default handler
