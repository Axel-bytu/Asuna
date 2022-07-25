let handler = async(m, { conn }) => {
    let revoke = await conn.groupRevokeInvite(m.chat)
    let name = conn.getName(m.chat)
    conn.reply(m.sender, `Se restableció con éxito el link del grupo ${name}\nNuevo link: ${'https://chat.whatsapp.com/' + revoke}`)
}
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.command = /^revoke$/i
handler.help = ['revoke']
handler.tags = ['admin', 'group']
export default handler
