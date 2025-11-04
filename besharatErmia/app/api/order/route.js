import { emailOrderNotification, emailOrderReport } from "@/helpers/email";

export async function POST(req, res) {
  const data = await req.json();


  const result = await emailOrderReport(data);
  await emailOrderNotification(data);



  return Response.json({ success: result });
}
