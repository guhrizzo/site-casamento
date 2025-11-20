export async function POST(req) {
  try {
    const { nome, preco, imagem } = await req.json();

    const priceInCents = Math.round(preco * 100);

    const response = await fetch("https://api.infinitepay.io/invoices/public/checkout/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle: "gustavo-fernandes-738",
        redirect_url: "https://site-casamento-beryl.vercel.app/pagCerto",
        webhook_url: "https://seusite.com/webhook",
        order_nsu: Date.now().toString(),
        items: [
          {
            quantity: 1,
            price: priceInCents,
            description: nome,
            image_url: imagem, // AGORA FUNCIONA
          },
        ],
      }),
    });

    const data = await response.json();

    return Response.json({
      checkout_url: data.payment_url || data.url || null,
      raw: data
    });

  } catch (error) {
    console.log("Erro API InfinitePay:", error);
    return Response.json({ error: true, message: error.message });
  }
}
