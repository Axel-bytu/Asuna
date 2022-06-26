import db from '../lib/database.js'
const daily = 500

let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.claimed) {
        throw `Kamu sudah claim hari ini.\nClaim lagi besok hari.\n\nData claim akan diriset setiap jam 04:00 WIB.`
    } else {
        user.exp += daily * user.level
        throw `*+${daily * user.level} XP*\n\nSemakin tinggi level semakin banyak XP yang didapat.`
    }
}

handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

module.exports = handler