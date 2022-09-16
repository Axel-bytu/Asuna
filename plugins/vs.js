let handler  = async (m, { conn, usedPrefix, command }) => {
//conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 Mystic 」─*`, m)
conn.reply(m.chat, `╭━━━━━[*Lista del vs*]━━━━⬣\n'*⚔️ Clan (x)  vs S4nGrientos ⚔️*\n
Hora del vs ⌚: (x)\n
Color de bestimenta: Roja\n 
🩸𝔼𝕤𝕔𝕦𝕒𝕕𝕣𝕒 #🥇\n
➪.\n
➪.\n
➪.\n
➪.\n
🩸𝔼𝕤𝕔𝕦𝕒𝕕𝕣𝕒 #🥈\n
➪.\n
➪.\n
➪.\n
➪.\n
🩸𝔼𝕤𝕔𝕦𝕒𝕕𝕣𝕒 #🥉\n
➪.\n
➪.\n
➪.\n
➪.\n
🩸𝕊𝕦𝕡𝕝𝕖𝕟𝕥𝕖𝕤 #🏅\n
➪.\n
➪.\n
➪.\n
➪.\n
*nota*: tener discord del clan y ser puntual a la hora indicada, leer las reglas del vs.
'\n╰━━━━━━[ ${watermark} ]━━━━━⬣`, null, null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `${usedPrefix}menu`]
], m,)} 

handler.help = ['vs']
handler.tags = ['fun']
handler.command = /^(vs)$/i
handler.fail = null
handler.group = true
handler.owner = true
export default handler
