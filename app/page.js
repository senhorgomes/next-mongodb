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
  const hardwareProblemTickets = allTickets.reduce((filteredTickets, singleTicket)=>{
    if(singleTicket.category === "Hardware Problem"){
      filteredTickets.push(<TicketCard {...singleTicket}/>);
    }
    return filteredTickets;
  }, [])
  const softwareProblemTickets = allTickets.reduce((filteredTickets, singleTicket)=>{
    if(singleTicket.category === "Software Problem"){
      filteredTickets.push(<TicketCard {...singleTicket}/>);
    }
    return filteredTickets;
  }, [])
  const projectTickets = allTickets.reduce((filteredTickets, singleTicket)=>{
    if(singleTicket.category === "Project"){
      filteredTickets.push(<TicketCard {...singleTicket}/>);
    }
    return filteredTickets;
  }, [])

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
        <h2>Hardware Problems</h2>
        <h2>Software Problems</h2>
        <h2>Projects</h2>
        {projectTickets}
        {/* {allTickets.map((singleTicketData)=> <TicketCard {...singleTicketData}/>)} */}
      </section>
    </main>
  );
}
