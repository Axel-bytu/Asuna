// import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    if (!text) throw '¿Quién quiere ser prohibido de usar a Asuna bot?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a un usurio'
    let users = db.data.users
    users[who].banned = true
    conn.reply(m.chat, `prohibido con éxito`, m)
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler
