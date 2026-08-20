function clean(value, maxLength = 500) {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { fullName, email, phone, budget, investment, language, website } =
    req.body || {};

  /* Simple bot protection */

  if (website) {
    return res.status(200).json({
      ok: true,
    });
  }

  const safeFullName = clean(fullName, 120);

  const safeEmail = clean(email, 160);

  const safePhone = clean(phone, 80);

  const safeBudget = clean(budget, 120);

  const safeInvestment = clean(investment, 80);

  const safeLanguage = clean(language, 10);

  if (
    !safeFullName ||
    !safeEmail ||
    !safePhone ||
    !safeBudget ||
    !safeInvestment
  ) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  const allowedInvestments = new Set([
    "BIST",
    "NASDAQ",
    "COMMODITIES",
    "FOREX",
    "CRYPTO",
  ]);

  if (!allowedInvestments.has(safeInvestment)) {
    return res.status(400).json({
      error: "Invalid investment",
    });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram environment variables are missing.");

    return res.status(500).json({
      error: "Telegram configuration missing",
    });
  }

  const investmentNames = {
    BIST: "BIST",

    NASDAQ: "NASDAQ",

    COMMODITIES: "Emtia / Commodities",

    FOREX: "Forex",

    CRYPTO: "Crypto",
  };

  const message = [
    "📥 YENİ OPEN LIVE TALEBİ",
    "",
    `👤 İsim Soyisim: ${safeFullName}`,
    `📧 E-posta: ${safeEmail}`,
    `📞 Telefon: ${safePhone}`,
    `💰 Bütçe: ${safeBudget}`,
    `📈 İlgilendiği yatırım: ${investmentNames[safeInvestment]}`,
    `🌐 Site dili: ${safeLanguage.toUpperCase()}`,
    "",
    `🕒 Tarih: ${new Date().toISOString()}`,
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: chatId,

          text: message,

          disable_web_page_preview: true,
        }),
      },
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram error:", telegramData);

      return res.status(502).json({
        error: "Telegram delivery failed",
      });
    }

    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.error("Telegram request failed:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
