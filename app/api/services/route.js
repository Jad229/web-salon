import Service from "@models/service";
import { connectDB } from "@utils/database";

export const GET = async (req) => {
  await connectDB();
  try {
    const services = await Service.find({}); // Find all services
    return new Response(JSON.stringify(services), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req) => {
  await connectDB();
  try {
    const service = await Service.create(req.body);
    return new Response(JSON.stringify(service), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};
