/*
const { createCanvas, loadImage, registerFont } = (await import('canvas')).default
// const db = await import('../lib/database.js')
const path = (await import('path')).default
let font = await registerFont(path.resolve('src/ja-jp.ttf'), {family: 'Genshin'})
let pp = await conn.profilePictureUrl(m.sender, 'image')
let biz = await conn.getBusinessProfile(m.sender)
let name = await conn.getName(m.sender)
let text = biz.description.replace(/(?![^\n]{1,32}$)([^\n]{1,32})\s/g, '$1\n')
// let user = db.data.users[m.sender]
let data = `
Limit: 293
EXP: 177013
Level: 30
`.trim()

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
ctx.fillText(text, 444, 260)
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
await conn.sendFile(m.chat, canvas.toBuffer(), 'canvas.jpg', 'Haruno', m)
*/