// import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  Para AFK${user.afkReason ? ' después ' + user.afkReason : ''}
  Durante ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
  ¡No lo etiquetes!
  Él es AFK ${reason ? 'con razón' + reason : 'Sin razón'}
  Durante ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
