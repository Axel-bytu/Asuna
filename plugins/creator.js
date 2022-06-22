function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let cont = this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  this.reply(m.chat, 'Nomor *owner* itu bukan nomor bot.\nHarap pengertian nya nggak ngechat command bot ke nomer owner. Makasih.', cont)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
