// =============================================
// BOT DE SINAIS – SALA GRÁTIS + SALA VIP
// RODANDO 24/7 NO RAILWAY
// =============================================

import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

// Tokens dos bots (vindos do Railway)
const TOKEN_GRATIS = process.env.TOKEN_GRATIS;
const TOKEN_VIP = process.env.TOKEN_VIP;

// IDs das salas (vindos do Railway)
const CHAT_GRATIS = process.env.CHAT_GRATIS;
const CHAT_VIP = process.env.CHAT_VIP;

// Inicializa os bots
const botGratis = new TelegramBot(TOKEN_GRATIS, { polling: true });
const botVip = new TelegramBot(TOKEN_VIP, { polling: true });

console.log("Bots iniciados com sucesso!");

// =============================================
// COMANDOS MANUAIS PARA ENVIAR SINAIS
// =============================================

// SINAL PARA SALA GRÁTIS
botGratis.onText(/\/sinalgratis (.+)/, (msg, match) => {
  const texto = match[1];

  botGratis.sendMessage(
    CHAT_GRATIS,
    `📢 *SINAL GRÁTIS*\n\n${texto}`,
    { parse_mode: "Markdown" }
  );
});

// SINAL PARA SALA VIP
botVip.onText(/\/sinalvip (.+)/, (msg, match) => {
  const texto = match[1];

  botVip.sendMessage(
    CHAT_VIP,
    `💎 *SINAL VIP*\n\n${texto}`,
    { parse_mode: "Markdown" }
  );
});

// =============================================
// FUNÇÕES PARA ENVIOS AUTOMÁTICOS
// (VOCÊ PODE USAR NO FUTURO SE QUISER)
// =============================================

export function enviarSinalGratis(msg) {
  botGratis.sendMessage(
    CHAT_GRATIS,
    `📢 *SINAL AUTOMÁTICO – GRÁTIS*\n\n${msg}`,
    { parse_mode: "Markdown" }
  );
}

export function enviarSinalVip(msg) {
  botVip.sendMessage(
    CHAT_VIP,
    `💎 *SINAL AUTOMÁTICO – VIP*\n\n${msg}`,
    { parse_mode: "Markdown" }
  );
}
