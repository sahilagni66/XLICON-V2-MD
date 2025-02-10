import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = (thumb)
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` *𝐌⃝𝗂𐓣ᑯ 𝗒ⱺυ'𝗋𝖾 ⱺω𐓣 ᑲυ𝗌𝗂𐓣𝖾𝗌𝗌𓋜*

> Ｆｅｌｉｘ
*━━─     ────    ♡    ────    ─━━*
‌ඉᩧ ㅤ🧺ᩙ꤬ㅤ𝐋ıᩧ𝖿ᧉׅ ıᩧꗏ ᥣıᩧ𝗂ƙᧉׅ α 𝖼ⱺıᩧɳ. 𝐘ⱺυ 𝖼αɳ ꗏρᧉׅɳᑯ 𝗂ƚ α𐓣ყ ωαყ ყⱺυ ωıᩧ𝗌ɦ , ᑲυ𝗍 ყⱺυ ⱺɳᥣ𝗒 ꗏρᧉׅɳᑯ ıᩧƚ ⱺɳ𝖼ᧉׅ. ൭ㅤᰰᮬㅤ̣
‌━━─     ────    ♡    ────    ─━━
▬᳢̅ ⃞ᩦؙ︩︪̆፝⚓᷒ 𝐃ⱺω𐓣ᥣⱺαᑯ𝗂𐓣𝗀 𝐒ⱺ𐓣𝗀 𝐂ⱺꭑꭑα𐓣ᑯ
━ 🪻̸⃝ ✦ 𝐏ᥣα𝗒
━ 🪻̸⃝ ✦ 𝐏ᥣα𝗒2

╭━❮ 𝐑𝐄𝐋𝚰𝐆𝚰𝐎𝐍 ❯━╮
┃◆ .𝐁𝗂ᑲᥣ𝖾 𝖼ɦαρ𝗍𝖾𝗋_𐓣υꭑᑲ𝖾𝗋
╰━━━━━━━━━━━━⪼

╭━❮ 𝚰𝐌𝐀𝐆𝐄 ❯━╮
┃◆ .𝐁ᥣα𝖼𝗄ρ𝗂𐓣𝗄
╰━━━━━━━━━━━━⪼
╭━❮ 𝐓𝐎𝐎𝐋𝐒 ❯━╮
┃◆ .𝐆𝖾ꭑ𝗂𐓣𝗂 <𝗍𝖾𝗑𝗍>
┃◆ .𝐁𝗂𐓣𝗀 <𝗍𝖾𝗑𝗍>
┃◆ .𝐍ⱺωα
┃◆ .𝐓𝗂𝗄𝗍ⱺ𝗄
┃◆ .𝐆𝖾ꭑ𝗂𐓣𝗂 <𝗍𝖾𝗑𝗍>
┃◆ .𝐃𝖾ɦαƶ𝖾
┃◆ .𝐑𝖾𝖼ⱺᥣⱺ𝗋
┃◆ .𝐇ᑯ𝗋
┃◆ .𝐆𝖾𝗍
┃◆ .𝐐𝗋 <𝗍𝖾𝗑𝗍>
┃◆ .𝐐𝗋𝖼ⱺᑯ𝖾 <𝗍𝖾𝗑𝗍>
┃◆ .𝐋𝖾𐓣𝗀𝗍ɦ <αꭑⱺυ𐓣𝗍>
┃◆ .𝐓𝗂𐓣𝗒υ𝗋ᥣ <ᥣ𝗂𐓣𝗄>
┃◆ .𝐒ɦⱺ𝗋𝗍𝖾𐓣 <ᥣ𝗂𐓣𝗄>
┃◆ .𝐓𝖾ꭑρꭑα𝗂ᥣ
┃◆ .𝐂ɦ𝖾𝖼𝗄ꭑα𝗂ᥣ <𝗍ⱺ𝗄𝖾𐓣>
┃◆ .𝐒ɦαƶαꭑ
┃◆ .𝐂αᥣ <𝖾𝗊υα𝗍𝗂ⱺ𐓣>
┃◆ .𝐂α𝗋ᑲⱺ𐓣 <𝖼ⱺᑯ𝖾>
┃◆ .𝐂α𝗍υ𝗋ᥣ
┃◆ .𝐃𝖾𝖿𝗂𐓣𝖾 <ωⱺ𝗋ᑯ>
 ┃◆.𝐄ᥣ𝖾ꭑ𝖾𐓣𝗍
┃◆ .𝚰𝗍υ𐓣𝖾𝗌
┃◆ .𝐋𝗒𝗋𝗂𝖼𝗌
┃◆ .𝚰ꭑᑯᑲ
┃◆ .𝐂ⱺυ𝗋𝗌𝖾
┃◆ .𝐑α𐓣ᑯⱺꭑ𝖼ⱺυ𝗋𝗌𝖾
┃◆ .𝐑𝖾αᑯꭑⱺ𝗋𝖾 <𝗍𝖾𝗑𝗍1>|<𝗍𝖾𝗑𝗍2>
┃◆ .𝐑𝖾αᑯ𝗏ⱺ
┃◆ .𝐑𝖾ꭑⱺ𝗏𝖾ᑲ𝗀
┃◆ .𝐒𝗌 <υ𝗋ᥣ>
┃◆ .𝐒𝗌𝖿 <υ𝗋ᥣ>
┃◆ .𝐒υᑲ𝗋𝖾ᑯᑯ𝗂𝗍
┃◆ .𝐓υ𝗋ᥣ
┃◆ .𝐓𝗋α𐓣𝗌ᥣα𝗍𝖾 <ᥣα𐓣𝗀> <𝗍𝖾𝗑𝗍>
┃◆ .𝐓𝗋υ𝖾
┃◆ .𝐓𝗍𝗌 <ᥣα𐓣𝗀> <𝗍α𝗌𝗄>
┃◆ .𝐖α
┃◆ .𝐖𝗂𝗄𝗂ρ𝖾ᑯ𝗂α
┃◆ .𝐖𝖾α𝗍ɦ𝖾𝗋 *<ρᥣα𝖼𝖾>*
╰━━━━━━━━━━━━⪼
╭━❮ 𝐐𝐔𝐑𝐀𝐍 ❯━╮
┃◆ .𝐐υ𝗋α𐓣 [𝗌υ𝗋αɦ_𐓣υꭑᑲ𝖾𝗋] 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐒𝐔𝐑𝐀𝐇 ❯━╮
┃◆ .𝐐υ𝗋α𐓣 [𝗌υ𝗋αɦ_𐓣υꭑᑲ𝖾𝗋] 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐆𝐑𝐎𝐔𝐏 ❯━╮
┃◆ .𝐆𝖾𝗍ᑲ𝗂ⱺ <@𝗍α𝗀/𝗋𝖾ρᥣ𝗒>  Ⓛ
┃◆ .𝐀𐓣𝗂ꭑ𝖾𝗊υⱺ𝗍𝖾
┃◆ .𝐀𐓣𝗍𝗂ᥣ𝗂𐓣𝗄ᑯ𝖾ᥣ
┃◆ .𝐒𝖾𝗍ᑯ𝖾𝗌𝖼 <𝗍𝖾𝗑𝗍>
┃◆ .𝐒𝖾𝗍𐓣αꭑ𝖾 <𝗍𝖾𝗑𝗍>
┃◆.𝐀ᑯᑯ
┃◆ .𝐃𝖾ᥣ𝖾𝗍𝖾
┃◆ .𝐃𝖾ᥣωα𝗋𐓣 @υ𝗌𝖾𝗋
┃◆ .𝐃𝖾ꭑⱺ𝗍𝖾 (@𝗍α𝗀)
┃◆ .𝚰𐓣𝖿ⱺ𝗀ρ
┃◆ .𝐇𝗂ᑯ𝖾𝗍α𝗀
┃◆ .𝚰𐓣𝗏𝗂𝗍𝖾 <917𝗑𝗑𝗑>
┃◆ .𝐊𝗂𝖼𝗄 @υ𝗌𝖾𝗋
┃◆ .𝐋𝗂𐓣𝗄
┃◆ .𝐏ⱺᥣᥣ 𝗊υ𝖾𝗌𝗍𝗂ⱺ𐓣|ⱺρ𝗍𝗂ⱺ𐓣|ⱺρ𝗍𝗂ⱺ𐓣
┃◆ .𝐏𝗋ⱺ𝖿𝗂ᥣ𝖾
┃◆ .𝐏𝗋ⱺꭑⱺ𝗍𝖾
┃◆ .𝐑𝖾𝗌𝖾𝗍ᥣ𝗂𐓣𝗄
┃◆ .𝐒𝖾𝗍ᑲ𝗒𝖾 <𝗍𝖾𝗑𝗍>
┃◆ .𝐆𝗋ⱺυρ *ⱺρ𝖾𐓣/𝖼ᥣⱺ𝗌𝖾*
┃◆ .𝐒𝖾𝗍ω𝖾ᥣ𝖼ⱺꭑ𝖾 <𝗍𝖾𝗑𝗍>
┃◆ .𝐒𝗂ꭑυᥣα𝗍𝖾 <𝖾𝗏𝖾𐓣𝗍> @υ𝗌𝖾𝗋
┃◆ .𝐒𝗍α𝖿𝖿
┃◆ .𝐓α𝗀αᥣᥣ
┃◆ .𝐓ⱺ𝗍α𝗀
┃◆ .𝐖α𝗋𐓣 @υ𝗌𝖾𝗋
┃◆ .𝐖α𝗋𐓣𝗌
┃◆ .𝐌α𝗂𐓣
┃◆ .𝐌α𝗂𐓣
┃◆ .𝐌α𝗂𐓣
╰━━━━━━━━━━━━⪼
╭━❮ 𝐀𝐍𝚰𝐌𝐄 ❯━╮
┃◆ .𝐀𐓣𝗂ꭑ𝖾 
┃◆ .𝐀𝗄𝗂𝗋α 
┃◆ .𝐀𝗄𝗂𝗒αꭑα 
┃◆ .𝐀𐓣𐓣α 
┃◆ .𝐀𝗌υ𐓣α 
┃◆ .𝐀𝗒υƶαωα 
┃◆ .𝐁ⱺ𝗋υ𝗍ⱺ 
┃◆ .𝐂ɦ𝗂ɦⱺ 
┃◆ .𝐂ɦ𝗂𝗍ⱺ𝗀𝖾 
┃◆ .𝐃𝖾𝗂ᑯα𝗋α 
┃◆ .𝐄𝗋ƶα 
┃◆ .𝐄ᥣα𝗂𐓣α 
┃◆ .𝐄ᑲα 
┃◆ .𝐄ꭑ𝗂ᥣ𝗂α 
┃◆ .𝐇𝖾𝗌𝗍𝗂α 
┃◆ .𝐇𝗂𐓣α𝗍α 
┃◆ .𝚰𐓣ⱺ𝗋𝗂 
┃◆ .𝚰𝗌υƶυ 
┃◆ .𝐇𝗂𝗍α𝖼ɦ𝗂 
┃◆ .𝚰𝗍ⱺ𝗋𝗂 
┃◆ .𝐊α𝗀α 
┃◆ .𝐊α𝗀υ𝗋α 
┃◆ .𝐊αⱺ𝗋𝗂 
┃◆ .𝐊𝖾𐓣𝖾𝗄𝗂
┃◆ .𝐊ⱺ𝗍ⱺ𝗋𝗂 
┃◆ .𝐊υ𝗋υꭑ𝗂 
┃◆ .𝐌αᑯα𝗋α 
┃◆ .𝐌𝗂𝗄α𝗌α 
┃◆ .𝐌𝗂𝗄υ 
┃◆ .𝐌𝗂𐓣α𝗍ⱺ 
┃◆ .𝐍α𝗋υ𝗍ⱺ 
┃◆ .𝐍𝖾ƶυ𝗄ⱺ 
┃◆ .𝐒α𝗀𝗂𝗋𝗂 
┃◆ .𝐒α𝗌υ𝗄𝖾 
┃◆ .𝐒α𝗄υ𝗋α 
┃◆ .𝐀𝗄𝗂𝗋α 
┃◆ .𝐀ꭑ𝗏  Ⓛ
┃◆ .𝐖α𝗂𝖿υ 
┃◆ .𝐍𝖾𝗄ⱺ 
┃◆ .𝐙𝖾𝗋ⱺ𝗍ωⱺ 
┃◆ .𝐋ⱺᥣ 
┃◆ .𝐏ⱺ𝗄𝖾ᑯ𝖾𝗑 <ρⱺ𝗄𝖾ꭑⱺ𐓣>
┃◆ .𝐓𝗋α𝖼𝖾 
╰━━━━━━━━━━━━⪼
╭━❮ 𝚰𝐌𝐆 ❯━╮
┃◆ .𝐌𝖾𝗌𝗌𝗂
┃◆ .𝐂𝗋𝗂𝗌𝗍𝗂α𐓣ⱺ𝗋ⱺ𐓣αᥣᑯⱺ
┃◆ .𝐂𝗋7
┃◆ .𝐏𝐏𝖼ⱺυρᥣ𝖾
┃◆ .𝐏ρ𝖼ρ
╰─────────────────◙
╭━❮ 𝐀𝚰 ❯━╮
┃◆ .𝐃αᥣᥣ𝖾
┃◆ .𝐆𝗂𝗍α𝗀ρ𝗍
┃◆ .𝐂ɦα𝗍𝗀ρ𝗍
┃◆ .𝐀𝗂𝗌𝖾α𝗋𝖼ɦ
┃◆ .𝐂ɦα𝗍
┃◆ .𝐁ᥣα𝖼𝗄ᑲⱺ𝗑
┃◆ .𝐁𝗂𐓣𝗀𝗂ꭑ𝗀 <𝗊υ𝖾𝗋𝗒>
┃◆ .𝐓ⱺ𝖼α𝗋𝗍ⱺⱺ𐓣
┃◆ .𝐓ⱺα𐓣𝗂ꭑ𝖾
┃◆ .𝐃αᥣᥣ𝖾
╰━━━━━━━━━━━━⪼
╭━❮ 𝐎𝐖𝐍𝐄𝐑 ❯━╮
┃◆ .𝐋𝖾α𝗏𝖾𝗀𝖼
┃◆ .𝐎υ𝗍
┃◆ .𝐀ᑯᑯρ𝗋𝖾ꭑ <@𝗍α𝗀>
┃◆ .𝐀ᑯᑯⱺω𐓣𝖾𝗋 @υ𝗌𝖾𝗋
┃◆ .𝐀ᥣᥣⱺω <@𝗍α𝗀>
┃◆ .𝐁α𐓣 @υ𝗌𝖾𝗋
┃◆ .𝐁α𐓣𝖼ɦα𝗍
┃◆ .𝐓𝐗
┃◆ .𝐁𝗋ⱺαᑯ𝖼α𝗌𝗍 𝗀𝗋ⱺυρ <𝗍𝖾𝗑𝗍>
┃◆ .𝐁𝖼𝗀𝖼 <𝗍𝖾𝗑𝗍>
┃◆ .𝐂ᥣ𝖾α𝗋𝗍ꭑρ
┃◆.𝐃𝖾ᥣ𝖾𝗑ρ𝗂𝗋𝖾ᑯ 
┃◆.𝐃𝖾ᥣρ𝗋𝖾ꭑ @υ𝗌𝖾𝗋
┃◆ .𝐑𝖾ꭑⱺ𝗏𝖾 ⱺω𐓣𝖾𝗋 @υ𝗌𝖾𝗋
┃◆ .𝐅υᥣᥣρρ 
┃◆ .𝐆𝖾𝗍ρᥣυ𝗀𝗂𐓣 <𐓣αꭑ𝖾 𝖿𝗂ᥣ𝖾>
┃◆ .𝐆𝖾𝗍𝖿𝗂ᥣ𝖾 <𐓣αꭑ𝖾 𝖿𝗂ᥣ𝖾>
┃◆ .𝐉ⱺ𝗂𐓣 <𝖼ɦα𝗍.ωɦα𝗍𝗌αρρ.𝖼ⱺꭑ> <ᑯ𝗂α𝗌>
┃◆ .𝐑𝖾𝗌𝖾𝗍 <54𝗑𝗑𝗑>
┃◆ .𝐑𝖾𝗌𝖾𝗍ρ𝗋𝖾𝖿𝗂𝗑 
┃◆ .𝐑𝖾𝗌𝗍α𝗋𝗍 
┃◆.𝐒𝖾𝗍ρ𝗋𝖾𝖿𝗂𝗑 
┃◆ ..𝐒𝖾𝗍ρ𝗋𝖾𝖿𝗂𝗑 [𝗌𝗒ꭑᑲⱺᥣ]
┃◆ .𝐔𐓣ᑲα𐓣 @υ𝗌𝖾𝗋
┃◆ .𝐔𐓣ᑲα𐓣𝖼ɦα𝗍 
┃◆ .𝐔ρᑯα𝗍𝖾 
┃◆ .𝐔ρᑯα𝗍𝖾 𝐍ⱺω 
┃◆ .𝐂ⱺ𐓣𝖿𝗂𝗀 
┃◆ .𝐋𝗂𝗌𝗍ᑲα𐓣 
┃◆ .𝐃𝖾ᥣ𝖾𝗍𝖾ρᥣυ𝗀𝗂𐓣 <𐓣αꭑ𝖾>
╰━━━━━━━━━━━━⪼
╭━❮ 𝐌𝐀𝚰𝐍 ❯━╮
┃◆ .𝐒𝗍𝗋𝖾αꭑ 
┃◆ .𝐂ɦα𐓣𐓣𝖾ᥣ 
┃◆ .𝐆ρ𝗀υ𝗋υ 
┃◆ .𝐀ᥣ𝗂𝗏𝖾 
┃◆ .𝐁ᥣⱺ𝖼𝗄ᥣ𝗂𝗌𝗍
┃◆.𝚰𐓣𝖿ⱺ 
┃◆ .𝐎ω𐓣𝖾𝗋 
┃◆ .𝐓ⱺ𝗍αᥣ𝖿𝖾α𝗍υ𝗋𝖾 
┃◆ .𝐇α𝖼𝗄 
┃◆ .𝐋𝗂𝗌𝗍 
┃◆ .𝐁ⱺ𝗍ꭑ𝖾𐓣υ 
┃◆ .𝐎ω𐓣𝖾𝗋ꭑ𝖾𐓣υ 
┃◆ .𝐆𝗋ⱺυρꭑ𝖾𐓣υ 
┃◆ .𝐃ᥣꭑ𝖾𐓣υ 
┃◆ .𝐃ⱺω𐓣ᥣⱺαᑯ𝖾𝗋ꭑ𝖾𐓣υ 
┃◆.𝐄𝖼ⱺ𐓣ⱺꭑ𝗒ꭑ𝖾𐓣υ 
┃◆.𝐅υ𐓣ꭑ𝖾𐓣υ 
┃◆ .𝐆αꭑ𝖾ꭑ𝖾𐓣υ 
┃◆ .𝐒𝗍𝗂𝖼𝗄𝖾𝗋ꭑ𝖾𐓣υ 
┃◆ .𝐍𝐒𝐅𝐖ꭑ𝖾𐓣υ 
┃◆ .𝐋ⱺ𝗀ⱺꭑ𝖾𐓣υ 
┃◆ .𝐓ⱺⱺᥣꭑ𝖾𐓣υ 
┃◆ .𝐀𐓣𝗂ꭑ𝖾ꭑ𝖾𐓣υ2 
┃◆ .𝐀𐓣𝗂ꭑ𝖾ꭑ𝖾𐓣υ 
┃◆ .𝐋𝗂𝗌𝗍ρ𝗋𝖾ꭑ 
┃◆  .𝐏𝗂𐓣𝗀
┃◆  .𝐏𝗂𐓣𝗀2 
┃◆  .𝐑υ𐓣𝗍𝗂ꭑ𝖾 
┃◆  .𝐒𝖼𝗋𝗂ρ𝗍 
┃◆  .𝐒𝖾𝗋𝗏𝖾𝗋 
┃◆ .𝐒𝗒𝗌𝗍𝖾ꭑ 
┃◆ .𝐁ᥣⱺ𝖼𝗄ᥣ𝗂𝗌𝗍 
┃◆.𝐒𝖾𝗍ρ𝗋𝗂𝗏α𝖼𝗒 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐅𝐔𝐍 ❯━╮
┃◆ .𝐀𝖿𝗄 <𝗋𝖾α𝗌ⱺ𐓣>
┃◆ .𝐓ⱺꭑρ3 
┃◆ .𝐓ⱺα𝗏 
┃◆ .𝐁ⱺ𝗍 
┃◆ .𝐂ɦα𝗋α𝖼𝗍𝖾𝗋 @𝗍α𝗀
┃◆ .𝐃α𝗋𝖾 
┃◆ .𝐅ᥣ𝗂𝗋𝗍 
┃◆ .𝐆α𝗒 @υ𝗌𝖾𝗋
┃◆ .𝐉ⱺ𝗄𝖾 
┃◆ .𝐏𝗂𝖼𝗄υρᥣ𝗂𐓣𝖾 
┃◆ .𝐐υ𝖾𝗌𝗍𝗂ⱺ𐓣 
┃◆ .𝐒ɦα𝗒α𝗋𝗂 
┃◆ .𝐒ɦ𝗂ρ 
┃◆ .𝐘ⱺꭑαꭑα𝗃ⱺ𝗄𝖾 
┃◆ .𝐓𝗋υ𝗍ɦ 
┃◆ .𝐖α𝗌𝗍𝖾 @υ𝗌𝖾𝗋
┃◆ .𝐌𝖾ꭑ𝖾 
┃◆ .𝐐υⱺ𝗍𝖾 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐑𝐄𝐀𝐂𝐓𝚰𝐎𝐍 ❯━╮
┃◆ .𝐁υᥣᥣ𝗒 @𝗍α𝗀
┃◆ .𝐂υᑯᑯᥣ𝖾 @𝗍α𝗀
┃◆ .𝐂𝗋𝗒 @𝗍α𝗀
┃◆ .𝐇υ𝗀 @𝗍α𝗀
┃◆ .𝐀ωⱺⱺ @𝗍α𝗀
┃◆ .𝐊𝗂𝗌𝗌 @𝗍α𝗀
┃◆ .𝐋𝗂𝖼𝗄 @𝗍α𝗀
┃◆ .𝐏α𝗍 @𝗍α𝗀
┃◆ .𝐒ꭑυ𝗀 @𝗍α𝗀
┃◆ .𝐁ⱺ𐓣𝗄 @𝗍α𝗀
┃◆ .𝐘𝖾𝖾𝗍 @𝗍α𝗀
┃◆ .𝐁ᥣυ𝗌ɦ @𝗍α𝗀
┃◆ .𝐒ꭑ𝗂ᥣ𝖾 @𝗍α𝗀
┃◆ .𝐖α𝗏𝖾 @𝗍α𝗀
┃◆ .𝐇𝗂𝗀ɦ𝖿𝗂𝗏𝖾 @𝗍α𝗀
┃◆ .𝐇α𐓣ᑯɦⱺᥣᑯ @𝗍α𝗀
┃◆ .𝐍ⱺꭑ @𝗍α𝗀
┃◆ .𝐁𝗂𝗍𝖾 @𝗍α𝗀
┃◆ .𝐆ᥣⱺꭑρ @𝗍α𝗀
┃◆ .𝐒ᥣαρ @𝗍α𝗀
┃◆ .𝐊𝗂ᥣᥣ @𝗍α𝗀
┃◆ .𝐇αρρ𝗒 @𝗍α𝗀
┃◆ .𝐖𝗂𐓣𝗄 @𝗍α𝗀
┃◆ .𝐏ⱺ𝗄𝖾 @𝗍α𝗀
┃◆ .𝐃α𐓣𝖼𝖾 @𝗍α𝗀
┃◆ .𝐂𝗋𝗂𐓣𝗀𝖾 @𝗍α𝗀
╰━━━━━━━━━━━━⪼
╭━❮ 𝐔𝐓𝚰𝐋𝚰𝐓𝐘 ❯━╮
┃◆ .𝐁ꭑ𝗂 
┃◆ .𝐂𝗋𝗒ρ𝗍ⱺ 
┃◆ .𝐂υ𝗋𝗋𝖾𐓣𝖼𝗒 
┃◆.𝐂ⱺυ𐓣𝗍ᑯⱺω𐓣 
┃◆ .𝐏𝗋α𝗒𝖾𝗋 𝗍𝗂ꭑ𝖾 
┃◆.𝐆ⱺⱺ𝗀ᥣ𝖾  Ⓛ
┃◆ .𝐂ⱺ𐓣𝗏𝖾𝗋𝗍 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐂𝐌𝐃 ❯━╮
┃◆ .𝐃𝖾ᥣ𝖼ꭑᑯ <𝗍𝖾𝗑𝗍>
┃◆ .𝐋𝗂𝗌𝗍𝖼ꭑᑯ 
┃◆ .𝐒𝖾𝗍𝖼ꭑᑯ <𝗍𝗑𝗍>
╰━━━━━━━━━━━━⪼
╭━❮ 𝚰𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝚰𝐎𝐍 ❯━╮
┃◆ .𝐂𐓣𝗂𐓣𝖿ⱺ 
┃◆ .𝐅α𝖼𝗍 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐅𝚰𝐍𝐀𝐍𝐂𝐄 ❯━╮
┃◆𝐂𝗋𝗒ρ𝗍ⱺ 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐂𝐑𝐘𝐏𝐓𝐎 𝐂𝐔𝐑𝐑𝐄𝐍𝐂𝐘 ❯━╮
┃◆𝐂𝗋𝗒ρ𝗍ⱺ 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐓𝗂ꭑ𝖾 ❯━╮
┃◆ .𝐂ⱺυ𐓣𝗍ᑯⱺω𐓣 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐃ⱺω𐓣ᥣⱺαᑯ𝖾𝗋 ❯━╮
┃◆ .𝐅α𝖼𝖾ᑲⱺⱺ𝗄 <υ𝗋ᥣ>
┃◆ .𝐆ᑯ𝗋𝗂𝗏𝖾 
┃◆ .𝐆𝗂𝗍𝖼ᥣⱺ𐓣𝖾 <υ𝗋ᥣ>
┃◆ .𝚰𝗀𝗌𝗍αᥣ𝗄 
┃◆ .𝚰𐓣𝗌𝗍α𝗀𝗋αꭑ 
┃◆ .𝐌𝖾𝗀α 
┃◆ .𝐌ⱺᑯαρ𝗄 
┃◆ .𝐏ᥣα𝗒2 
┃◆ .𝐏ᥣα𝗒2 <𝗍𝖾𝗑𝗍 ⱺ𝗋 𝐘ⱺυ𝐓υᑲ𝖾 ᥣ𝗂𐓣𝗄>
 ┃◆.𝐏ᥣα𝗒 𝐕𝗂ᑯ<𝗍𝖾𝗑𝗍 ⱺ𝗋 𝐘ⱺυ𝐓υᑲ𝖾 ᥣ𝗂𐓣𝗄>
┃◆ .𝐒ρⱺ𝗍𝗂𝖿𝗒 
┃◆ .𝐓𝗂𝗄𝗍ⱺ𝗄𝗌𝗍αᥣ𝗄 
┃◆ .𝐓ω𝗂𝗍𝗍𝖾𝗋 <υ𝗋ᥣ>
┃◆ .𝐒𝖾α𝗋𝖼ɦ 𝐀𐓣ᑯ 𝐃ᥣ
┃◆ .𝐘𝗍𝗌𝖾α𝗋𝖼ɦ 
┃◆ .𝐘𝗍ꭑρ4 <𝗒𝗍-ᥣ𝗂𐓣𝗄>
┃◆ .𝐖αᥣᥣραρ𝖾𝗋 <𝗊υ𝖾𝗋𝗒>
┃◆ .𝐏ᥣα𝗒  Ⓛ
╰━━━━━━━━━━━━⪼
╭━❮ 𝐏𝐑𝐄𝐌𝚰𝐔𝐌 ❯━╮
┃◆ .𝐆ᑯ𝗋𝗂𝗏𝖾 🅟
╰━━━━━━━━━━━━⪼
╭━❮ 𝐑𝐀𝐍𝐃𝐎𝐌 ❯━╮
┃◆ .𝐃ⱺ𝗀 
┃◆ .𝐋ⱺᥣ𝗂𝗏𝗂ᑯα 
┃◆ .𝐂α𝗍 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐄𝐂𝐎𝐍𝐎𝐌𝐘 ❯━╮
┃◆ .𝐀ᑯᑯ𝗀ⱺᥣᑯ <@υ𝗌𝖾𝗋>
┃◆ .𝐀ᑯᑯ𝗑ρ <@υ𝗌𝖾𝗋>
┃◆ .𝐁α𐓣𝗄 
┃◆ .𝐁υ𝗒𝖼ɦ 
┃◆ .𝐂ⱺ𝖼𝗄-𝖿𝗂𝗀ɦ𝗍 <αꭑⱺυ𐓣𝗍>
┃◆ .𝐁υ𝗒 
┃◆ .𝐁υ𝗒αᥣᥣ 
┃◆ .𝐃α𝗂ᥣ𝗒 
┃◆ .𝐃𝖾ρⱺ𝗌𝗂𝗍 
┃◆ .𝐆αꭑᑲᥣ𝖾 <αꭑⱺυ𐓣𝗍> <𝖼ⱺᥣⱺ𝗋(𝗋𝖾ᑯ/ᑲᥣα𝖼𝗄)>
┃◆ .𝗀𝗂𝗏𝖾 𝖼𝗋𝖾ᑯ𝗂𝗍 [αꭑⱺυ𐓣𝗍] [@𝗍α𝗀]
┃◆ .𝐋𝖾𝗏𝖾ᥣ υρ 
┃◆ .𝐑α𐓣𝗄 
┃◆ .𝐑ⱺᑲ 
┃◆.𝐑ⱺυᥣ𝖾𝗍𝗍𝖾 <αꭑⱺυ𐓣𝗍> <𝖼ⱺᥣⱺ𝗋(𝗋𝖾ᑯ/ᑲᥣα𝖼𝗄)>
┃◆ .𝐖αᥣᥣ𝖾𝗍 
┃◆ .𝐖𝗂𝗍ɦᑯ𝗋αω 
┃◆ .𝐖ⱺ𝗋𝗄 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐂𝐎𝐑𝐄 ❯━╮
┃◆ .𝐋𝖾αᑯ𝖾𝗋ᑲⱺα𝗋ᑯ 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐆αꭑ𝖾 ❯━╮
┃◆ .𝐒ᥣⱺ𝗍 <αꭑⱺυ𐓣𝗍>
┃◆ .𝐂ɦ𝖾𝗌𝗌 [𝖿𝗋ⱺꭑ 𝗍ⱺ]
┃◆ .𝐂ɦ𝖾𝗌𝗌 ᑯ𝖾ᥣ𝖾𝗍𝖾
┃◆ .𝐂ɦ𝖾𝗌𝗌 𝗃ⱺ𝗂𐓣
┃◆ .𝐂ɦ𝖾𝗌𝗌 𝗌𝗍α𝗋𝗍
┃◆ .𝐃𝖾ᥣ𝗍𝗍𝗍 
┃◆ .𝐆υ𝖾𝗌𝗌𝖿ᥣα𝗀 
┃◆ .𝐌α𝗍ɦ𝗌 <ꭑⱺᑯ𝖾𝗌>
┃◆ .𝐏ρ𝗍 <𝗋ⱺ𝖼𝗄/ραρ𝖾𝗋/𝗌𝖼𝗂𝗌𝗌ⱺ𝗋𝗌>
┃◆ .𝐓𝗂𝖼𝗍α𝖼𝗍ⱺ𝖾 <𝗍α𝗀 𐓣υꭑᑲ𝖾𝗋>
╰━━━━━━━━━━━━⪼
╭━❮ 𝐂ⱺ𐓣𝖿𝗂𝗀 ❯━╮
┃◆.𝐄𐓣αᑲᥣ𝖾 <ⱺρ𝗍𝗂ⱺ𐓣>
┃◆ .𝐃𝗂𝗌αᑲᥣ𝖾 <ⱺρ𝗍𝗂ⱺ𐓣>
╰━━━━━━━━━━━━⪼
┌─◙『 *_𝗌𝗍υᑯ𝗒_* 』◙
┃⬡▸ .𝗀𝖾ꭑ
╰─────────────────◙
╭━❮ 𝚰𝐍𝐅𝐎 ❯━╮
┃◆ .𝐗𝗀ᥣ𝗂𝗌𝗍 
┃◆.𝐆𝗋ⱺυρᥣ𝗂𝗌𝗍𝗌 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐀𝚰 ❯━╮
┃◆ .𝚰ꭑ𝐆 
┃◆ .𝐇𝐃 🅟
┃◆ .𝐇ᑯ𝗋 🅟
┃◆ .𝐔𐓣ᑲᥣυ𝗋 🅟
┃◆ .𝐂ⱺᥣⱺ𝗋𝗂ƶ𝖾ᑯ 🅟
┃◆ .𝐂ⱺᥣⱺ𝗋𝗂ƶ𝖾ᑯ 🅟
┃◆ .𝐄𐓣ɦα𐓣𝖼𝖾 🅟
┃◆ .𝐄𐓣ɦα𐓣𝖼𝖾𝗋 🅟
┃◆ .𝐃𝖾ɦαƶ𝖾 🅟
┃◆ .𝐑𝖾𝖼ⱺᥣⱺ𝗋 🅟
┃◆ .𝐄𐓣ɦα𐓣𝖼𝖾 🅟
╰━━━━━━━━━━━━⪼
╭━❮ 𝐋𝐎𝐆𝐎 ❯━╮
┃◆ .𝐃𝖾𝖾ρ𝗌𝖾α 
┃◆ .𝐇ⱺ𝗋𝗋ⱺ𝗋 
┃◆ .𝐏𝗂𐓣𝗄 
┃◆ .𝐂α𐓣ᑯ𝗒 
┃◆ .𝐂ɦ𝗋𝗂𝗌𝗍ꭑα𝗌 
┃◆ .𝐋υ𝗑υ𝗋𝗒 
┃◆ .𝐒𝗄𝗒 
┃◆ .𝐒𝗍𝖾𝖾ᥣ 
┃◆ .𝐆ᥣυ𝖾 
┃◆ .𝐅αᑲ𝗋𝗂𝖼 
┃◆ .𝐓𝗋α𐓣𝗌𝖿ⱺ𝗋ꭑ𝖾𝗋 
┃◆ .𝐓ⱺ𝗑𝗂𝖼 
┃◆ .𝐀𐓣𝖼𝗂𝖾𐓣𝗍 
┃◆ .𝐓ɦυ𐓣ᑯ𝖾𝗋 
┃◆ .𝐆𝗋αρɦ 
┃◆ .𝐍𝖾ⱺ𐓣 
┃◆ .𝐅𝗋ⱺƶ𝖾𐓣 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐌α𝗄𝖾𝗋 ❯━╮
┃◆ .𝐁ᥣυ𝗋 
┃◆ .𝐃𝗂𝖿υꭑ𝗂𐓣α𝗋2 
┃◆ .𝐇ⱺ𝗋𐓣𝗒𝖼α𝗋ᑯ 
┃◆ .𝐇ⱺ𝗋𐓣𝗒ᥣ𝗂𝖼𝖾𐓣𝗌𝖾 
┃◆ .𝐆𝖿𝗑1 
┃◆ .𝐆𝖿𝗑2 
┃◆ .𝐆𝖿𝗑3 
┃◆ .𝐆𝖿𝗑4 
┃◆ .𝐆𝖿𝗑5 
┃◆ .𝐆𝖿𝗑6 
┃◆ .𝐆𝖿𝗑7 
┃◆.𝐆𝖿𝗑8 
┃◆ .𝐆𝖿𝗑9 
┃◆ .𝐆𝖿𝗑10 
┃◆ .𝐆𝖿𝗑11 
┃◆ .𝐆𝖿𝗑12 
┃◆ .𝐒𝗂ꭑρ𝖼α𝗋ᑯ 
┃◆ .𝚰𝗍'𝗌 𝗌ⱺ 𝗌𝗍υρ𝗂ᑯ 
┃◆ .𝚰𝗌𝗌 
┃◆.𝐒𝗍υρ𝗂ᑯ 
┃◆.𝐓ω𝖾𝖾𝗍 <𝖼ⱺꭑꭑ𝖾𐓣𝗍>
┃◆.𝐋ⱺᥣ𝗂𝖼ⱺ𐓣 
┃◆ .𝐘𝗍𝖼ⱺꭑꭑ𝖾𐓣𝗍 <𝖼ⱺꭑꭑ𝖾𐓣𝗍>
╰━━━━━━━━━━━━⪼
╭━❮ 𝐍𝐒𝐅𝐖 ❯━╮
┃◆ .𝐍𝐒𝐅𝐖 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃 ❯━╮
┃◆ $
╰━━━━━━━━━━━━⪼
╭━❮ 𝐏𝐋𝐔𝐆𝚰𝐍 ❯━╮
┃◆ .𝐏ᥣυ𝗀𝗂𐓣𝗌 
┃◆ .𝚰𐓣𝗌𝗍αᥣᥣ <𝐆𝗂𝗌𝗍 𝐔𝐑𝐋>
╰━━━━━━━━━━━━⪼
╭━❮ 𝐑𝐆 ❯━╮
┃◆ .𝐑𝖾𝗀 <𐓣αꭑ𝖾.α𝗀𝖾>
┃◆ .𝐌𝗒𝗌𐓣 
┃◆.𝐔𐓣𝗋𝖾𝗀 <𝐍υꭑ 𝐒𝖾𝗋𝗂𝖾>
╰━━━━━━━━━━━━⪼

╭━❮ 𝐒𝐓𝚰𝐂𝐊𝐄𝐑 ❯━╮
┃◆ .𝐄ꭑⱺ𝗃𝗂 𝐌𝗂𝗑 <𝖾ꭑⱺ𝗃𝗂+𝖾ꭑⱺ𝗃𝗂>
┃◆ .𝐆𝖾𝗍𝗌𝗍𝗂𝖼𝗄𝖾𝗋 
┃◆ .𝐒𝐌α𝗄𝖾𝗋
┃◆ .𝐒𝗍𝗂𝖼𝗄𝖾𝗋ω𝗂𝗍ɦꭑ𝖾ꭑ𝖾 (𝖼αρ𝗍𝗂ⱺ𐓣|𝗋𝖾ρᥣ𝗒 ꭑ𝖾ᑯ𝗂α)
┃◆ .𝐒ωꭑ𝖾ꭑ𝖾 <υ𝗋ᥣ>
┃◆ .𝐒ωꭑ (𝖼αρ𝗍𝗂ⱺ𐓣|𝗋𝖾ρᥣ𝗒 ꭑ𝖾ᑯ𝗂α)
┃◆ .𝐅υᥣᥣ
┃◆ .𝐓ⱺ𝗂ꭑ𝗀 <𝗌𝗍𝗂𝖼𝗄𝖾𝗋>
 ┃◆.𝐓ⱺ𝗏𝗂ᑯ 
┃◆ .𝐓𝗋𝗂𝗀𝗀𝖾𝗋 <@υ𝗌𝖾𝗋>
┃◆ .𝐓𝗍ρ 
┃◆ .𝐓𝗍ρ2 
┃◆.𝐓𝗍ρ3 
┃◆.𝐓𝗍ρ4 
┃◆.𝐓𝗍ρ5 
┃◆𝐀𝗍𝗍ρ 
┃◆.𝐀𝗍𝗍ρ2 
┃◆ .𝐀𝗍𝗍ρ3 
┃◆.𝐓α𝗄𝖾 <𐓣αꭑ𝖾>|<αυ𝗍ɦⱺ𝗋>
╰━━━━━━━━━━━━⪼
╭━❮ 𝐀𝐔𝐃𝚰𝐎 ❯━╮
┃◆ .𝐁α𝗌𝗌 [𝗏𐓣]
┃◆ .𝐁ᥣⱺω𐓣 [𝗏𐓣]
┃◆ .𝐃𝖾𝖾ρ [𝗏𐓣]
┃◆ .𝐄α𝗋𝗋αρ𝖾 [𝗏𐓣]
┃◆ .𝐅α𝗌𝗍 [𝗏𐓣]
┃◆ .𝐅α𝗍 [𝗏𐓣]
┃◆.𝐍𝗂𝗀ɦ𝗍𝖼ⱺ𝗋𝖾 [𝗏𐓣]
┃◆ .𝗏𝖾𝗋𝗌𝖾 [𝗏𐓣]
┃◆ .𝐑ⱺᑲⱺ𝗍 [𝗏𐓣]
┃◆ .𝐒ᥣⱺω [𝗏𐓣]
┃◆.𝐒ꭑⱺⱺ𝗍ɦ [𝗏𐓣]
┃◆ .𝐓υρα𝗂 [𝗏𐓣] 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐍𝐄𝐖𝐒 ❯━╮
┃◆ .𝐍𝖾ω𝗌 
┃◆ .𝐓𝖾𝖼ɦ𐓣𝖾ω𝗌 
╰━━━━━━━━━━━━⪼
╭━❮ 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝚰𝐎𝐍 ❯━╮
┃◆ .𝐂ⱺ𐓣𝗏𝖾𝗋𝗍 
╰━━━━━━━━━━━━⪼
    ‌ ‌ ‌ ‌  
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','commands'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
     }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "I'm not lazy, I'm just on my energy saving mode.",
      "Life is short, smile while you still have teeth.",
      "I may be a bad influence, but darn I am fun!",
      "I'm on a whiskey diet. I've lost three days already.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I told my wife she should embrace her mistakes... She gave me a hug.",
      "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
      "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
      "I'm so good at sleeping, I can do it with my eyes closed.",
      "If you think nobody cares if you’re alive, try missing a couple of payments.",
      "I used to think I was indecisive, but now I'm not so sure.",
      "If you can't convince them, confuse them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I'm not clumsy, I'm just on a mission to test gravity.",
      "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
      "Life is like a box of chocolates; it doesn't last long if you're hungry.",
      "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "Why do they call it beauty sleep when you wake up looking like a troll?",
      "I don't always lose my phone, but when I do, it's always on silent.",
      "My bed is a magical place where I suddenly remember everything I was supposed to do.",
      "I love the sound you make when you shut up.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "I'm not a complete idiot, some parts are missing.",
      "When life gives you lemons, squirt someone in the eye.",
      "I don't need anger management. You just need to stop making me angry.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "The early bird can have the worm because worms are gross and mornings are stupid.",
      "If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
      "The road to success is always under construction.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "Some people just need a high-five. In the face. With a chair.",
      "I'm not saying I'm perfect, but I'm pretty close.",
      "A day without sunshine is like, you know, night.",
      "The best way to predict the future is to create it.",
      "If you can't be a good example, then you'll just have to be a horrible warning.",
      "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
      "I'm not lazy. I'm on energy-saving mode.",
      "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
      "I don't have a bad handwriting, I have my own font.",
      "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together."
];
