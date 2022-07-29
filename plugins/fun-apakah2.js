let handler = async (m, { command, text }) => m.reply(`
*Pregunta:* ${command} ${text}
*Respuesta:* ${['Ya', 'Quizás sí', 'Probablemente', 'Quizás no', 'No', 'De ninguna manera'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah2 <teks>?']
handler.tags = ['fun']
handler.command = /^apakah2$/i

export default handler
