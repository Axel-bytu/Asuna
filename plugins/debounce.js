import { spawn } from 'child_process';
import db from '../lib/database.js'
let handler = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (conn.user.jid == conn.user.jid) {
    await m.reply('Sedang merestart bot...')
    await db.write()
    process.send('reset')
  } else throw 'Error.'
}
handler.help = ['debounce' + (process.send ? '' : ' (Tidak Bekerja)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
export default handler