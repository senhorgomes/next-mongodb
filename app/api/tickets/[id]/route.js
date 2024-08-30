import { NextResponse } from "next/server";
import Ticket from "@/app/models/Ticket";
export async function DELETE(req , {params}){
    const { id } = params;
    try {
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket Deleted"}, {status: 201});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}
export async function GET(req , {params}){
    const { id } = params;
    try {
        const ticketData = await Ticket.findById(id);
        return NextResponse.json({ ticketData }, {status: 201});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}
export async function PUT(req , {params}){
    const { id } = params;
    try {
        const body = await req.json();
        const updatedTicketData = body.formData;
        await Ticket.findByIdAndUpdate(id, { ...updatedTicketData });
        return NextResponse.json({message: "Ticket Created"}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}