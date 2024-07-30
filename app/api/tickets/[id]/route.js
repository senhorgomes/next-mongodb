import { NextResponse } from "next/server";

export async function DELETE(req , {params}){
    const { id } = params;
    try {
        await Ticket.deleteOne({id});
        return NextResponse.json({message: "Ticket Deleted"}, {status: 201});
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}