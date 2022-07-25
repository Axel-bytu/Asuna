import PhoneNumber from 'awesome-phonenumber'
let handler = async(m, { conn }) => {
    let nomor = owner[0][0]
    let number = nomor + '@s.whatsapp.net'
    let biz = await conn.getBusinessProfile(number)

    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Axel;;;
FN:Axel
TEL;type=CELL;type=VOICE;waid=${nomor}:${PhoneNumber('+' + nomor).getNumber('international')}
X-WA-BIZ-NAME:Axel
X-WA-BIZ-DESCRIPTION:${biz.description.replace(/\n/g, '\\n')}
END:VCARD
    `.trim()

    let kont = await conn.sendMessage(m.chat, { contacts: { displayName: 'Axel', contacts: [{vcard}]}}, { quoted: m})
    let kont2 = await conn.sendContact(m.chat, [[`${owner[1][0]}`, 'Zaki'], [`${owner[2][0]}`, 'Rafli']], m)
    conn.reply(m.chat, 'Nomor owner itu bukan bot, tidak usah chat command bot.\nChat yang sopan kalau belum dibales ya jangan spam. Makasih', kont)
    conn.reply(m.chat, 'Nomor partner owner', kont2)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
