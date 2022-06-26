import { canLevelUp, xpRange } from '../lib/levelling.js'
import canvacord from 'canvacord'
import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    let who = m.sender
    let pp = global.image
    let user = db.data.users[who]
    let discriminator = who.substring(9, 13)
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    try {
        pp = await conn.getProfilePicture(who)
    } catch (e) {
    }
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let rank = await new canvacord.Rank()
            .setRank(user.level + 1)
            .setAvatar(pp)
            .setLevel(user.level)
            .setCurrentXP(user.exp - min)
            .setRequiredXP(xp)
            .setProgressBar("#f2aa4c", "COLOR")
            .setUsername(await conn.getName(who))
            .setDiscriminator(discriminator)
        rank.build()
        .then(async data => {
            await conn.sendButton(m.chat, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), watermark, data, [['Daily', '.claim']], m)
        })
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let rank = await new canvacord.Rank()
            .setRank(user.level + 1)
            .setAvatar(pp)
            .setLevel(user.level)
            .setCurrentXP(user.exp - min)
            .setRequiredXP(xp)
            .setProgressBar("#f2aa4c", "COLOR")
            .setUsername(conn.getName(who))
            .setDiscriminator(discriminator)
        rank.build()
        .then(async data => {
            await conn.sendButton(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), watermark, data, [['Daily', '.claim']], m)
        })
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler