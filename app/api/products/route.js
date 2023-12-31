import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Product from '@/models/Product';

export const GET = async (request) => {
  try {
    await connectDB();

    const products = await Product.find().sort('-_id');

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  try {
    await connectDB();

    const product = await Product.create({ ...body });

    if (product) {
      return NextResponse.json(product, {
        status: 201,
      });
    }
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
