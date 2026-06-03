 import postgres from 'postgres';

 const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

 async function listInvoices() {
 	const data = await sql`
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
   `;

 	return data;
 }

export async function GET() {
 // return Response.json({
 //   message:
 //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
 // });
 // try {
     try {
    const data = await listInvoices();
    
    // Convertimos a string con 2 espacios de identación para legibilidad
    const formattedData = JSON.stringify(data, null, 2);
    
    return new Response(formattedData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
	//return Response.json(await listInvoices());
   } catch (error) {
   	return Response.json({ error }, { status: 500 });
 }
}
