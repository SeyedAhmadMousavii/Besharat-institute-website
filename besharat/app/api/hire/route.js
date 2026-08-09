import { emailHireNotification, emailHireReport } from "@/helpers/email";

export async function POST(req, res) {
  const data = await req.json();


  const result = await emailHireReport(data);
  await emailHireNotification(data);



  return Response.json({ success: result });
}
