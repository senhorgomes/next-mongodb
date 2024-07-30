import { useRouter } from "next/router"
import Ticket from "@/app/models/Ticket";

export async function getServerSideProps(context){
  const { id } = context.params;

  const ticketData = await Ticket.findById(id);
  return {
    ticketData
  }
}
const SingleTicketPage = ({ticketData}) => {

  return (
    <TicketForm {...ticketData}/>
  )
}

export default SingleTicketPage