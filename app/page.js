import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCard from "./components/TicketCard";
import { faPoo } from "@fortawesome/free-solid-svg-icons"
const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, {cache:"no-store"});
    const tickets = await res.json();
    return tickets;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export default async function Dashboard() {
  const { allTickets }  = await getTickets();
console.log(allTickets)
  if(!allTickets){
    return (
      <main className="p-5">
          <h1>Sorry, it appears our services are down. <FontAwesomeIcon icon={faPoo} /></h1>
          <br/>
          <h2>We apologize for the inconvience.</h2>
      </main>
    )
  }
  return (
    <main className="p-5">
      <section className="lg:grid grid-cols-2 xl:grid-cols-4">
        {allTickets.map((singleTicketData)=> <TicketCard {...singleTicketData}/>)}
      </section>
    </main>
  );
}
