import Ticket from "../../models/Ticket";
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);

        return NextResponse.json({message: "Ticket Created"}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}
export const GET = withApiAuthRequired(async function tickets(req) {
    try {
        const session = await getSession(req);
        // Find all tickets that belong to the user id
        const allTickets = await Ticket.find({user_id: session.user.sub});

        return NextResponse.json({ allTickets }, {status: 200, headers: {
            'Cache-Control': 'no-store'
        }})
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
})
