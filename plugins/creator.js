
let handler = function (m) {
  // this.sendContact(m.chat, '593 96 268 1710', 'Broz', m)
  this.sendContact(m.chat, '593962681710', 'Broz', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
