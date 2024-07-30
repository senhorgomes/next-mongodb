import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons"
import TicketForm from "@/app/components/TicketForm";
const fetchTicketData = async(id) => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${id}`, {cache: "no-store"})
    if(!res.ok){
      throw new Error("Failed to get ticket.");
    }
    return res.json();
  } catch (error) {
    console.log("Error:", error);
  }
}
const SingleTicketPage = async ({ params }) => {

  const { id } = params;

  const { ticketData } = await fetchTicketData(id)
  console.log(ticketData)
  if(!ticketData) {
    return (
      <main className="p-5">
        <h1>Sorry, we aren't able to fetch the ticket data at this moment. <FontAwesomeIcon icon={faPoo} /></h1>
        <br />
        <h2>We apologize for the inconvience.</h2>
      </main>
    )
  }

  return (
    <TicketForm {...ticketData}/>
  )
}

export default SingleTicketPage