// TODO: fix this

// import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
¡Felicitaciones, has subido de nivel!
*${before}* -> *${user.level}*
Usar *.profile* para verificar 
	`.trim())
    }
}
export const disabled = true
