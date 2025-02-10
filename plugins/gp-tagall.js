let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏ 🍥꤬᪲ɢʀօʊք : *${groupMetadata.subject}*\n\n ͏🏷️᪲ᮬ ʍɛʍɮɛʀֆ : *${participants.length}*${text ? `\n ⟅📦 ʍɛֆֆǟɢɛ : ${text}\n` : ''}\n\n────ȶǟɢʟɨֆȶ────\n` + users.map(v => '🏴‍☠️ᩬᩧ̸⃞🕸  @' + v.replace(/@.+/, '')).join`\n` + '\n *⍝꯭፝֟⍝.  ‎ꆮ︪︪ ‎ּּּ ‎‌🦢𐨍റᩙ ꠩ 𝐒𝕚ᥣ𝖾ⴄ𝖼𝖾 𝗂𝗌 ⴄ𑄙𝗍 𝗍ɦ𝖾 αᑲა𝖾𝗻𝖼𝖾 ⱺ𝖿 ꯱𑄙υⴄᑯ ᑲυ𝗍 𝗍ɦ𝖾 ρ𐐲𝖾ა𝖾𝗻𝖼𝖾 ⱺ𝖿 α ᑯ𝖾𝖾ρ𝖾𐐲 ꭑ𝖾αⴄ𝗂ⴄ𝗀.𝚰ⴄ 𝗍ɦ𝖾 ꯱𝕚ᥣ𝖾𝗻𝖼𝖾, ω𝖾 𝖼αⴄ ɦ𝖾α𐐲 𝗍ɦ𝖾 ωɦ𝗂𝗌ρ𝖾𐐲ა ⱺ𝖿 ⱺυ𝗋 ꯱𑄙υᥣ. ㅤ⊹ ׄ   ִ  🌼᳢  ׄ   ִ   ʾ* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
