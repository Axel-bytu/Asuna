// import db from '../lib/database.js'

let handler = async (m, { command, usedPrefix, text }) => {
    if (!text) await conn.sendButton(m.chat, `Ingrese el nombre del mensaje que desea eliminar.\n\nEjemplo: ${usedPrefix + command} Tes`, watermark, false, [['Lihat daftar pesan', '.listmsg']], m)
    let msgs = db.data.msgs
    if (!(text in msgs)) await conn.sendButton(m.chat, `${text} no está en la lista.\n\n¿Ves la lista?`, watermark, false, [['Lihat daftar pesan', '.listmsg']], m)
    delete msgs[text]
    m.reply(`Mensaje eliminado con éxito en la lista de mensajes con nombre '${text}'`)
}
handler.help = ['msg'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^delmsg$/

export default handler
