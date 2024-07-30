import { NextResponse } from "next/server";
import Ticket from "@/app/models/Ticket";
export async function DELETE(req , {params}){
    const { id } = params;
    console.log(id)
    try {
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket Deleted"}, {status: 201});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}