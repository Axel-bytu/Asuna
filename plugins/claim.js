// import db from '../lib/database.js'
const daily = 500

let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.claimed) {
        throw `Has reclamado hoy.\nReclama de nuevo mañana.\n\nLos datos de la reclamación se restablecerán cada hora 04:00 WIB.`
    } else {
        let hec = user.level
        if (user.level === 0) {
            hec = 1
        }
        user.exp += daily * hec
        user.claimed = true
        throw `*+${daily * hec} XP*\n\nCuanto más alto sea el nivel, más XP obtienes.`
    }
}

handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

export default handler
