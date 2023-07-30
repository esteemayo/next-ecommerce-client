import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Product from '@/models/Product';

export const POST = async (request) => {
  const { ids } = await request.json();

  try {
    await connectDB();

    const products = await Product.find({ _id: ids });

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
