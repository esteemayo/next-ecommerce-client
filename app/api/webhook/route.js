import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { buffer } from 'micro';

import Order from '@/models/Order';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_15e89d07d7ab7841d55a7de7c425b14a5d0628df3fcb6ef8fa25442fd0cadb93';

export const POST = async (request) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(request), sig, endpointSecret);
  } catch (err) {
    NextResponse.json(`Webhook Error: ${err.message}`, {
      status: 400,
    });
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const { orderId } = data.metadata;
      const paid = data.payment_status === 'paid';

      if (orderId && paid) {
        Order.findByIdAndUpdate(orderId,
          { $set: { paid: true } },
          {
            new: true,
            runValidators: true,
          },
        );
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json('ok', {
    status: 200,
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
