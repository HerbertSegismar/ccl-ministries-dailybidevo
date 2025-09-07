import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { paymentMethodId, amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      amount,
      currency,
      confirm: true,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
