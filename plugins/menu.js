// import db from '../lib/database.js'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
// import { plugins } from '../lib/plugins.js'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const defaultMenu = {
  before: `
┌──「 *%me* 」
├ Hai, *%name!*
├ %time
│
├ *%watermark*
└───

*Group Official*:
\`\`\`https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom\`\`\`

Jika ingin memasukkan bot kedalam group, ketik command:
*.join <link group mu>*
%readmore`.trimStart(),
  header: '┌──「 %category 」',
  body: '├ %cmd %islimit %isPremium',
  footer: '└───\n',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, args, command, __dirname }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'anime', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'islamic', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (!args[0]) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'anime': 'Anime',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'islamic') tags = {
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let packager = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role, registered } = db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = registered ? db.data.users[m.sender].name : await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let selectedimage = pic[Math.floor(Math.random() * pic.length)]
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(db.data.users).length
    let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      const sections = [
            {
              "rows": [{
                "title": `Pemilik Bot`,
                "description": "Nomor Pemilik Bot (owner)",
                "rowId": `${_p}creator`
              }, {
                "title": "Syarat Ketentuan dan Peraturan",
                "description": "Harap membaca Peraturan demi kenyamanan kita bersama",
                "rowId": `${_p}rules`
              }, {
                "title": "Group Official Harunobot",
                "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan",
                "rowId": `${_p}harunoff`
              }],
              "title": "Informasi Bot"
            }, {
              "rows": [{
                "title": `Semua Perintah`,
                "description": "Menu Semua Perintah",
                "rowId": `${_p}? all`
                }],
              "title": "─────「 1 」"
            }, {
              "rows": [{
                "title": `Game`,
                "description": "Menu untuk Game",
                "rowId": `${_p}? game`
              }],
              "title": "─────「 2 」"
            }, {
              "rows": [{
                "title": `XP`,
                "description": "Menu untuk XP",
                "rowId": `${_p}? xp`
              }],
              "title": "─────「 3 」"
            }, {
              "rows": [{
                "title": `Sticker`,
                "description": "Menu untuk Sticker",
                "rowId": `${_p}? stiker`
              }],
              "title": "─────「 4 」"
            }, {
              "rows": [{
                "title": `Anime`,
                "description": "Some anime, manga, doujinshi stuff...",
                "rowId": `${_p}? anime`
              }],
              "title": "─────「 5 」"
            }, {
              "rows": [{
                "title": `Kerang Ajaib`,
                "description": "Puja kerang ajaib...",
                "rowId": `${_p}? kerangajaib`
              }],
              "title": "─────「 6 」"
            }, {
              "rows": [{
                "title": `Quotes`,
                "description": "Menu untuk Quotes",
                "rowId": `${_p}? quotes`
              }],
              "title": "─────「 7 」"
            }, {
              "rows": [{
                "title": `Admin`,
                "description": "Menu untuk Admin",
                "rowId": `${_p}? admin`
              }],
              "title": "─────「 8 」"
            }, {
              "rows": [{
                "title": `Grup`,
                "description": "Menu untuk Group",
                "rowId": `${_p}? group`
              }],
              "title": "─────「 9 」"
            }, {
              "rows": [{
                "title": `Premium`,
                "description": "Menu untuk Premium Users",
                "rowId": `${_p}? premium`
              }],
              "title": "─────「 10 」"
            }, {
              "rows": [{
                "title": `Internet`,
                "description": "Menu untuk menjelajahi Internet...",
                "rowId": `${_p}? internet`
              }],
              "title": "─────「 11 」"
            }, {
              "rows": [{
                "title": `Anonymous Chat`,
                "description": "Menu untuk Anonymous Chat",
                "rowId": `${_p}? anonymous`
              }],
              "title": "─────「 12 」"
            }, {
              "rows": [{
                "title": `Nulis & Logo`,
                "description": "Menu untuk Nulis & Logo",
                "rowId": `${_p}? nulis`
              }],
              "title": "─────「 13 」"
            }, {
              "rows": [{
                "title": `Downloader`,
                "description": "Menu Downloader",
                "rowId": `${_p}? downloader`
              }],
              "title": "─────「 14 」"
            }, {
              "rows":[{
                "title": `Tools`,
                "description": "Menu untuk Tools",
                "rowId": `${_p}? tools`
              }],
              "title": "─────「 15 」"
            }, {
              "rows": [{
                "title": `Fun`,
                "description": "Menu Fun",
                "rowId": `${_p}? fun`
              }],
              "title": "─────「 16 」"
            }, {
              "rows": [{
                "title": `Database`,
                "description": "Menu untuk Database",
                "rowId": `${_p}? database`
              }],
              "title": "─────「 17 」"
            }, {
              "rows": [{
                "title": `Vote & Absen`,
                "description": "Menu untuk Vote & Absen",
                "rowId": `${_p}? vote`
              }],
              "title": "─────「 18 」"
            }, {
              "rows": [{
                "title": `Islamic`,
                "description": "Menu Islamic",
                "rowId": `${_p}? islamic`
              }],
              "title": "─────「 19 」"
            }, {
              "rows": [{
                "title": `Pengubah Suara`,
                "description": "Menu Pengubah Suara",
                "rowId": `${_p}? audio`
              }],
              "title": "─────「 20 」"
            }, {
              "rows": [{
                "title":  `Jadi Bot`,
                "description": "Numpang",
                "rowId": `${_p}? jadibot`
              }],
              "title": "─────「 21 」"
            }, {
              "rows": [{
                "title": `Info`,
                "description": "Menu untuk Info",
                "rowId": `${_p}? info`
              }],
              "title": "─────「 22 」"
            }, {
              "rows": [{
                "title": `Tanpa Kategori`,
                "description": "Menu Tanpa Kategori",
                "rowId": `${_p}? tanpakategori`
              }],
              "title": "─────「 23 」"
            }, {
              "rows": [{
                "title":  `Owner Menu`,
                "description": "Menu Khusus Owner",
                "rowId": `${_p}? owner`
              }],
              "title": "─────「 24 」"
            }
          ]
          const listMessage = {
            title: `${ucapan()}, ${name}`.trim(),
            text: "Berikut ini adalah daftar menu Haruno Bot.",
            footer: "Silahkan tekan tombol \"Click Here\" untuk melihat sub-menu Haruno Bot.\n\nJika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.\n\n*Group Official*: \`\`\`https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom\`\`\`",
            buttonText: "Click Here",
            sections
        }
        await conn.sendMessage(m.chat, listMessage, { quoted: m})
    } else {
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by ${author}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      watermark: global.watermark,
      npmname: packager.name,
      npmdesc: packager.description,
      version: packager.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: packager.homepage ? packager.homepage.url || packager.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendButton(m.chat, text.trim(), watermark, await (await fetch(selectedimage)).buffer(), [['Owner', `${_p}owner`], ['Donasi', `${_p}donasi`], ['Group Official', '.harunoff']],  m)
  }
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat dinihari"
  if (time >= 4) { 
    res = "Ohayou!"
  }
  if (time > 10) {
    res = "Konnichiwa!"
  }
  if (time >= 15) {
    res = "Konnichiwa!"
  }
  if (time >= 18) {
    res = "Konbanwa!"
  }
  return res
}