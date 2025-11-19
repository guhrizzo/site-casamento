import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { title, price } = await req.json();

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title,
            quantity: 1,
            unit_price: Number(price),
          },
        ],
      },
    });

    return Response.json({ id: result.id });

  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return Response.json({ error: true }, { status: 500 });
  }
}
