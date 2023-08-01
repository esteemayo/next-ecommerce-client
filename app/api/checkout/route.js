import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Product from '@/models/Product';

export const POST = async (request) => {
  const body = await request.json();

  const {
    title,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    products,
  } = body;

  try {
    await connectDB();

    const productsIds = products.split(',');
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
              name: productInfo.name,
            },
            unit_amount: quantity * productInfo.price,
          },
        });
      }
    }

    return NextResponse.json(line_items, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json(500, {
      status: 500,
    });
  }
};
