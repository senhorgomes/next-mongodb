import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCard from "./components/TicketCard";
import { faPoo } from "@fortawesome/free-solid-svg-icons"
const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, { cache: "no-cache" });
    const tickets = await res.json();
    return tickets;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export default async function Dashboard() {
  const { allTickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(allTickets?.map(({ category }) => category))
  ]
  
  if (!allTickets) {
    return (
      <main className="p-5">
        <h1>Sorry, it appears our services are down. <FontAwesomeIcon icon={faPoo} /></h1>
        <br />
        <h2>We apologize for the inconvience.</h2>
      </main>
    )
  }
  return (
    <main className="p-5">
      <section>
        {allTickets && uniqueCategories?.map((uniqueCategory) =>
          <div key={uniqueCategory} className="mb-4">
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {allTickets.reduce((filteredTickets, singleTicket) => {
              if (singleTicket.category === uniqueCategory) {
                filteredTickets.push(<TicketCard key={singleTicket._id} {...singleTicket} />);
              }
              return filteredTickets;
            }, [])}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
