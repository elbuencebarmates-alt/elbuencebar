// api/create-preference.js
// Vercel Serverless Function para interactuar con Mercado Pago de forma segura y evitar CORS

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Manejar preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { items, back_urls, auto_return } = req.body;

    const mpResponse = await fetch("https://api.mercadopago.com/v1/checkout/preferences", {
      method: "POST",
      headers: {
        "Authorization": "Bearer APP_USR-2659646479834957-070222-8d72885e0ce44b6d854c5a6ddd8d79db-3516181668",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items,
        back_urls,
        auto_return
      })
    });

    if (!mpResponse.ok) {
      const errorText = await mpResponse.text();
      throw new Error(`Error de la API de Mercado Pago: ${errorText}`);
    }

    const data = await mpResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al crear preferencia en Mercado Pago:", error);
    return res.status(500).json({ error: error.message });
  }
}
