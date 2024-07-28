// import Ticket from "../(models)/Ticket";

import { NextResponse } from "next/server";

export async function POST(req){
    try {
        // console.log(req.body)
        // console.log(process.env.MONGODB_URI)
        const body = await req.json();
        console.log(body)
        // const ticketData = body.formData;
        // await Ticket.create(ticket);

        return NextResponse.json({message: "Success"}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}