// import db from '../lib/database.js'

let handler = async (m, { command }) => {
    if (!m.quoted) throw '¡Mensaje de respuesta!'
    if (!m.quoted.fileSha256) throw 'Falta hash SHA256 '
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'Hash no encontrado en la base de datos'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Listo')
}
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i

export default handler
