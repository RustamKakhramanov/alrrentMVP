const TELEGRAM_BOT_TOKEN = '475221440:AAHNDQCALXnKo_WL2lE7PiWtiXLZ6oGCOw0';
const TELEGRAM_CHAT_ID = '488552094';
const TELEGRAM_ENABLED = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || false;

export async function sendTelegramMessage(name: string, phone: string, source: string = '') {
  if (!TELEGRAM_ENABLED) {
    return true;
  }

  const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `Новая заявка с сайта:
${source ? `Источник: ${source}\n` : ''}Имя: ${name}
Телефон: ${phone}`,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
}