let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'abierto': false,
		'on': false,
		'1': false,
		'close': true,
		'cerrado': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
contoh:
${usedPrefix + command} cerrado
${usedPrefix + command} abierto
	`.trim(), watermark, 'Abierto', ',grup 1', 'Cerrado', ',grup 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grupo <abierto/cerrado>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.admin = true
handler.botAdmin = true
module.exports = handler
