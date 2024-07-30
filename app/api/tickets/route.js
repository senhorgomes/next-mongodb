import Ticket from "../../models/Ticket";

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
export async function GET(req){
    try {
        const allTickets = await Ticket.find({});

        return NextResponse.json({ allTickets }, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function DELETE(req){
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.deleteOne({id: ticketData.id});
        return NextResponse.json({message: "Ticket Deleted"}, {status: 201});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}