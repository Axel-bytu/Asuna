import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['628112958665', 'Fadli', true],
  ['6288215569001', 'Zaki', true],
  ['628998512588', 'Rafli', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Haruno'
global.author = 'Fadli'

// Haruno global
global.image = 'https://telegra.ph/file/0eb764fc1b4fd2bc2b968.jpg'
global.watermark = '© Haruno'
global.wait = '「 ⏱️ 」Harap tunggu...'
global.multiplier = 59 // The higher, The harder levelup
global.source = 'https://youtu.be/pgCNibhSYsY'
global.pic =  ['https://telegra.ph/file/f96d9fdebba8eaa08ba7b.jpg', 'https://telegra.ph/file/67ae7747903d9b45a7427.jpg', 'https://telegra.ph/file/5d8c2f2797cb067ef887c.jpg', 'https://telegra.ph/file/07f09ce47a07c187b1d79.jpg', 'https://telegra.ph/file/456bdf2f852674b3fdb18.jpg', 'https://telegra.ph/file/96bfbbe091aa5523c7150.jpg', 'https://telegra.ph/file/7644617a4ad58d8d6f0e2.jpg']

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})