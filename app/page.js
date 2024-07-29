import TicketCard from "./components/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("/api/tickets", {cache:"no-store"})
    return res.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export default async function Dashboard() {
  const { tickets } = getTickets();

  if(!tickets){
    return (
      <main className="p-5">
          <h1>Sorry, it appears our services are down. Please try again shortly</h1>
      </main>
    )
  }
  console.log()
  return (
    <main className="p-5">
      <section className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
        <TicketCard/>
      </section>
    </main>
  );
}
