/*
Project Name : NEXUS XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/NEXUS-XMD
Support      : wa.me/263714757857
*/



import config from '../../config.cjs';

// Main command function
const anticallcommand = async (m, Matrix) => {
  const botNumber = await Matrix.decodeJid(Matrix.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'anticall') {
    if (!isCreator) return m.reply("*𝚘𝚗𝚕𝚢 𝙹𝙾𝚎𝚕 𝚖𝚎 𝚘𝚠𝚗𝚎𝚛 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚍𝚒𝚜 𝚌𝚖𝚍*");
    let responseMessage;

    if (text === 'on') {
      config.REJECT_CALL = true;
      responseMessage = "Anti-Call has been enabled.";
    } else if (text === 'off') {
      config.REJECT_CALL = false;
      responseMessage = "Anti-Call has been disabled.";
    } else {
      responseMessage = "Usage:\n- `anticall on`: Enable Anti-Call\n- `anticall off`: Disable Anti-Call";
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error processing your request:", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};

export default anticallcommand;
