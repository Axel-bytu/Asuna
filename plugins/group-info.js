import db from '../lib/database.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*Group Information*\n
ID: ${groupMetadata.id}
Name: ${groupMetadata.subject}
Description: ${groupMetadata.desc?.toString() || 'No description'}
Total Members: ${participants.length} Members
Group Owner: @${owner.split('@')[0]}
Group Admins: 
${listAdmin}

Group Settings:
${isBanned ? '✅' : '❌'} Banned
${welcome ? '✅' : '❌'} Welcome
${detect ? '✅' : '❌'} Detect
${del ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link

Message Settings:
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    // conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
    const message = {
        image: { url: pp},
        jpegThumbnail: await(await fetch(pp)).buffer(),
        caption: text,
        mentions: [...groupAdmins.map(v => v.id), owner], 
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Copy group ID',
                    url: 'https://www.whatsapp.com/otp/copy/' + groupMetadata.id
                }
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m})

}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler