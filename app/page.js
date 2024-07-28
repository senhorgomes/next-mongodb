import TicketCard from "./(components)/TicketCard";

export default function Dashboard() {
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
