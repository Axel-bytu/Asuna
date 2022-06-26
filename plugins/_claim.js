import cron from 'node-cron'
import db from '../lib/database.js'

export async function all(m) {
    cron.schedule('0 0 4 * * *', () => {
        conn.reply(owner[0][0] + '@s.whatsapp.net', 'Claim diriset.')
        let users = Object.entries(db.data.users).map(v => v[0])
        for (id of users) db.data.users[id].claimed = false
    }, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    })
}