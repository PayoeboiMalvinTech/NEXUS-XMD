/*
Project Name : NEXUS XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/NEXUS-XMD
Support      : wa.me/263714757857
*/



import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('⚡');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `*𝑛𝑒𝑥𝑢𝑠 𝑠𝑝𝑒𝑒𝑑 : ${responseTime.toFixed(2)} 𝑚𝑠* 💫`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
