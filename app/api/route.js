import Ticket from "../(models)/Ticket";

import { NextResponse } from "next/server";

export async function POST(req){
    try {
        console.log(req.body)
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticket);
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}