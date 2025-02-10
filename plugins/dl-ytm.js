import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw '✳️ What do you want me to search for on YouTube?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'No results found for the given query.';
    }

    const firstResult = results[0];

 const message = `
───────────────
❗ ${firstResult.title} ❗
───────────────
🖇️ *Link*: ${firstResult.url} ${firstResult.url}  
⏱️ *Duration*: ${firstResult.timestamp}  
📅 *Published*: ${firstResult.ago}  
👁️ *Views*: ${firstResult.views}  
     *ׅ ׄ𖫑ᩞ ፝֟᷼͡ 𖫑ᩞ ׄ ׅ- Ɗყi̫ɳ𝐠 i̫ɳຮi̫d͟͟͠ᥱ , Տ𑜀i̫ᥣi̫ɳ𝐠 𑄝ׁ𝐮t͟ຮi̫d͟͟͠ᥱ. 𝗹̶͟🌙᪶ 𝆬 ׅ ꒱*
───────────────
`;
    await conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
    
    await m.react('⏳');
    
    const downloadUrl = `https://ironman.koyeb.app/ironman/dl/yta?url=${encodeURIComponent(firstResult.url)}`;
    const title = firstResult.title;

    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: title,
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    throw 'An error occurred while processing your request.';
  }
};

handler.help = ['search and dl'];
handler.tags = ['downloader'];
handler.command = ['ytm', 'play'];

export default handler;
