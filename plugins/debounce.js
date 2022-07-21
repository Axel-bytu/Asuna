import { spawn } from 'child_process';
let handler = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando bots...')
    await global.db.write()
    process.send('reset')
  } else throw 'Error. El lugar de ejecución no es compatible con la función debounce.'
}
handler.help = ['debounce' + (process.send ? '' : ' (Tidak Bekerja)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
export default handler
