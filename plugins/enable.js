// TODO: Cleaning the message
// import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isActivar = /true|activar|(turn)?on|1/i.test(command)
  let isDesactivar = /false|desactivar|(turno)?off|0/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let bot = db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isActivar
      chat.welcome = isDesactivar
      break
    // case 'detect':
    //   if (!m.isGroup) {
    //     if (!isOwner) {
    //       global.dfail('group', m, conn)
    //       throw false
    //     }
    //   } else if (!isAdmin) {
    //     global.dfail('admin', m, conn)
    //     throw false
    //   }
    //   chat.detect = isActivar
    //   break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isActivar
      chat.delete = isDesactivar
       break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isActivar
      chat.delete = isDesactivar
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isActivar
    //   break
    // case 'document':
    //   chat.useDocument = isActivar
    //   break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isActivar
      global.opts['self'] = isDesactivar
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isActivar
      chat.antiLink = isDesactivar
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isActivar
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isActivar
    //   break
    // case 'autolevelup':
    //   isUser = true
    //   user.autolevelup = isActivar
    //   break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isActivar
    //   break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isActivar
      bot.restrict = isDesactivar
      break
    case 'canvas':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isActivar
      global.opts['nyimak'] = isDesactivar
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isActivar
      global opts['autoread'] = isDesactivar
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isActivar
      global.opts['pconly'] = isDesactivar
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isActivar
      global.opts['gconly'] = isDesactivar
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isActivar
      global opts['swonly'] = isDesactivar 
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
Lista de opciones: welcome | delete | public | antilink | antidelete | antitoxic | autolevelup | detect | document | whitelistmycontacts | canvas  | restrict | nyimak | autoread | pconly | gconly | swonly
Ejemplo:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
      throw false
  }
  m.reply(`
*${type}* Está funcion fue *${isActivar ? 'activada' : 'desactivada'* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}
`.trim())
}
handler.help = ['activar', 'desactivar'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((ac|desc)tivar|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
