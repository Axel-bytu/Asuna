const { proto } = (await import('@adiwajshing/baileys')).default
// import db from '../lib/database.js'

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = proto.WebMessageInfo
    if (!m.quoted) throw `Responder mensaje con comando *${usedPrefix + command}`
    if (!text) throw `Introduce un nombre para el mensaje..\n\nEjemplo: ${usedPrefix + command} Tes`
    let msgs = db.data.msgs
    if (text in msgs) throw `'${text}' ¡registrado!\nUsar otro nombre.`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensaje agregado con éxito '${text}'\n\nAccede escribiendo el nombre`.trim())
}
handler.help = ['msg'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^addmsg$/

export default handler
