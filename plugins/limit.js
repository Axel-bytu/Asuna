// TODO: Make a canvas template

import db from '../lib/database.js'
const { createCanvas, loadImage, registerFont } = (await import('canvas')).default
import path from 'path'

let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = db.data.users[who]
    let opts = db.data.settings[conn.user.jid].canvas
    let name = conn.getName(who)
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'Hey there! I\'m using Haruno!'
    let desc = about.replace(/(?![^\n]{1,32}$)([^\n]{1,32})\s/g, '$1\n')
    let font = await registerFont(path.resolve('src/ja-jp.ttf'), {family: 'Genshin'})
    let data = `
Limit: ${user.limit}
EXP: ${user.exp}
Lebel: ${user.level}
`.trim()
    let caption = `
Limit: *${user.limit}*
EXP: *${user.exp}*
Level: *${user.level}*
Role: *${user.role}*
Daily Reward: *${user.dailyReward}*
Joincount: *${user.joincount}*

*${watermark}*
`.trim()
    let pp = 'https://telegra.ph/file/22cacf2d738f3732bf558.png'
    try {
        pp = await conn.profilePictureUrl(who, 'image')
    } catch (e) {
    }
        // await conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
        const canvas = createCanvas(1280, 610)
        const ctx = canvas.getContext('2d')

        ctx.save()
        const background = await loadImage('https://telegra.ph/file/f8a9a754f43e7f62ecf12.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        ctx.restore()

        ctx.save()
        ctx.beginPath();
        ctx.arc(216, 216, 150, 0, 2*Math.PI, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(pp)
        ctx.lineTo(avatar, 100, 100)
        ctx.drawImage(avatar, 65, 65, 300, 300)
        ctx.restore()

        ctx.save()
        ctx.font = "71px Genshin"
        ctx.fillStyle = "white"
        ctx.fillText(name, 444, 198)
        ctx.restore()

        ctx.save()
        ctx.font = "31px Genshin"
        ctx.fillStyle = "white"
        ctx.fillText(desc, 444, 260)
        ctx.restore

        ctx.save()
        ctx.font = "40px Genshin"
        ctx.fillStyle = "white"
        ctx.fillText(data, 444, 400)
        ctx.restore()

        ctx.save()
        ctx.font = "45px Genshin"
        ctx.fillStyle = "white"
        ctx.fillText("Haruno", 128, 436)
        ctx.restore()
        await conn.sendFile(m.chat, canvas.toBuffer(), 'canvas.jpg', caption, m)
}
handler.help = ['my [@62XXXX]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
export default handler
