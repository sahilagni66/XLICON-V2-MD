import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

global.owner = [
  ['918127875972', '𝐅𝖾ᥣ𝗂𝗑', true]
] //Number of owners

global.mods = ['923184070915', '918127875972', '923184474176', '233531910067', '233508488192'] 
global.prems = ['923184070915', '233208179431', '918127875972', '918360234087', '233508488192']
global.allowed = ['918127875972', '233208179431', '94789481495', '918360234087', '233508488192']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { // APIKey Here
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝐅𝖾ᥣ𝗂𝗑'
global.premium = 'true'
global.packname = '𝐅𝖾ᥣ𝗂𝗑' 
global.author = '𝐀ᑯᑯ 𝐓ⱺ 𝐅α𝗏ⱺυ𝗋𝗂𝗍𝖾 𝐊𝗋ᥣⱺ' 
global.menuvid = 'https://i.imgur.com/AAdRdIv.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaGyfnWBPzjO0MPYmh3v\n' 
global.dygp = 'https://chat.whatsapp.com/EOojWFPhi2204G7mEFFKXc'
global.fgsc = 'https://github.com/salmanytofficial/XLICON-V2-MD' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _𝐑υ𝗄ⱺ 𝐙𝗋α 𝐒αᑲα𝗋 𝐊𝗋ⱺ 𝐅𝖾ᥣ𝗂𝗑 𝐁υ𝗌𝗒 𝐇α𝗂..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // maximum warnings

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})


