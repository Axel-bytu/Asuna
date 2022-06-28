// import db from '../lib/database.js'
const daily = 500

let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.claimed) {
        throw `Kamu sudah claim hari ini.\nClaim lagi besok hari.\n\nData claim akan diriset setiap jam 04:00 WIB.`
    } else {
        let hec = user.level
        if (user.level === 0) {
            hec = 1
        }
        user.exp += daily * hec
        user.claimed = true
        throw `*+${daily * hec} XP*\n\nSemakin tinggi level semakin banyak XP yang didapat.`
    }
}

handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

export default handler