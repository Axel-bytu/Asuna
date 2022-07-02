import { canLevelUp, xpRange } from '../lib/levelling.js'
// import canvacord from 'canvacord'
// import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    let who = m.sender
    let pp = global.image
    let user = db.data.users[who]
    // let discriminator = who.substring(0, 4)
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    try {
        pp = await conn.profilePictureUrl(who, 'image')
    } catch (e) {
    }
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        await conn.sendButton(m.chat, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), watermark, false, [['Daily', '.claim']], m)    
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        await conn.sendButton(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), watermark, false, [['Daily', '.claim']], m)
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler