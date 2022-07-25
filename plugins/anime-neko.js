import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let res = await fetch('https://nekos.life/api/v2/img/neko')
    let json = await res.json()
    let img = await(await fetch(json.url)).buffer()
    await conn.sendButton(m.chat, 'Neko!', watermark, img, [['Neko', '.neko']], m)
}
handler.command = /^(neko|nekonime)$/i
handler.tags = ['anime']
handler.help = ['neko']

export default handler
