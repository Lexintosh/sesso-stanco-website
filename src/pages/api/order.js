// src/pages/api/order.js
export const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const item = data.get('item');
    const size = data.get('size') || 'N/A';
    
    if (!name || !email || !item) {
      return new Response(JSON.stringify({ error: 'Mancano dati, coglione.' }), { status: 400 });
    }

    // Genera un codice ordine ignorante basato sul timestamp e un pizzico di casualità
    const orderCode = `SSR-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Date.now().toString().slice(-4)}`;

    // QUI MANDI LA MAIL. Ti lascio la struttura fetch pronta. 
    // Puoi usare Resend, Sendgrid o un cazzo di webhook. Per ora ti restituisco il successo con il codice.
    console.log(`[ORDINE GENERATO] Codice: ${orderCode} | Cliente: ${name} (${email}) | Articolo: ${item} [${size}]`);

    /* Esempio di integrazione reale con Resend (se vorrai metterlo):
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Sesso Stanco Records <ordini@tuodominio.com>',
        to: [email, 'tua_mail_admin@gmail.com'], // Invia a entrambi
        subject: `ORDINE CONFERMATO ${orderCode}`,
        html: `Usa il codice <strong>${orderCode}</strong> nella causale del Bonifico o PayPal.`
      })
    });
    */

    return new Response(JSON.stringify({ success: true, orderCode }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};