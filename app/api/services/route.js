import Service from "@models/service";
import { connectDB } from "@utils/database";

export async function GET(req) {
  try {
    await connectDB();
    const services = await Service.find({}); // Find all services
    return new Response(JSON.stringify(services), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to get services", {
      status: 500,
    });
  }
}

export async function POST(req) {
  const body = await req.json();
  const { name, price, tag } = body;
  console.log(body);

  try {
    await connectDB();
    const service = await Service.create({ name, price, tag });
    return new Response(JSON.stringify(service), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new service", {
      status: 500,
    });
  }
}
