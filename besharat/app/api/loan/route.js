import { emailLoanNotification, emailLoanRequest } from "@/helpers/email";

export async function POST(req, res) {
  const data = await req.json();


  const result = await emailLoanRequest(data);
  await emailLoanNotification(data);



  return Response.json({ success: result });
}
