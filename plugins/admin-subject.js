let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Introduce un nuevo título para el grupo.\n\nEjemplo: ${usedPrefix + command} Asuna Official`
    await conn.groupUpdateSubject(m.chat, text)
    conn.reply(m.chat, `El título del grupo se ha cambiado correctamente.\nCambiado por: @${m.sender.split`@`[0]}`, null, { mentions: [m.sender]})
}
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.command = /^(changesubject|updatesubject)$/i
handler.help = ['updatesubject']
handler.tags = ['admin', 'group']
export default handler
