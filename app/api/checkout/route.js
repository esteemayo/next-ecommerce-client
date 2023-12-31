import Stripe from 'stripe';
import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Product from '@/models/Product';
import Order from '@/models/Order';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  const body = await request.json();

  const {
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    cart,
  } = body;

  try {
    await connectDB();

    const productsIds = cart;
    const uniqueIds = [...new Set(productsIds)];

    const productsInfos = await Product.find({ _id: uniqueIds });

    let line_items = [];
    for (const productId of uniqueIds) {
      const productInfo = productsInfos.find((item) => String(item._id) === productId);
      const quantity = productsIds.filter((item) => item === productId)?.length || 0;

      if (quantity > 0 && productInfo) {
        line_items.push({
          quantity,
          price_data: {
            currency: 'USD',
            product_data: {
              name: productInfo.title,
            },
            unit_amount: quantity * productInfo.price * 100,
          },
        });
      }
    }

    const newOrder = {
      line_items,
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
    };

    const order = await Order.create({ ...newOrder });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: email,
      success_url: `${process.env.PUBLIC_URL}/cart?success=true`,
      cancel_url: `${process.env.PUBLIC_URL}/cart?cancel=true`,
      metadata: {
        orderId: String(order._id),
      },
    });

    return NextResponse.json({ url: session.url }, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json(500, {
      status: 500,
    });
  }
};
