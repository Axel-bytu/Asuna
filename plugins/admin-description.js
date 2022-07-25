let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Ingrese una nueva descripción para el grupo.\n\nEjemplo: ${usedPrefix + command} Asuna Official`
    await conn.groupUpdateDescription(m.chat, text)
    conn.reply(m.chat, `La descripción del grupo se ha cambiado correctamente.\nCambiar por: @${m.sender.split`@`[0]}`, null, { mentions: [m.sender]})
}
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.command = /^(changedesc|updatedesc|descgc)$/i
handler.help = ['updatedesc']
handler.tags = ['admin', 'group']
export default handler
