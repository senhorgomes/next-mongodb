import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
const useTicketsData = () => {

  const [allTickets, setAllTickets] = useState([]);
  const { user, isLoading } = useUser();
  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, { cache: "no-store" });
        const ticketData = await res.json();
        setAllTickets(ticketData.allTickets);
      } catch (error) {
        console.log(error);
      }
    }
    if (user && !isLoading) {
      getTickets();
    }
  }, [user]);

  const deleteTicket = async (ticketId) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${ticketId}`, { method: "DELETE" });

      if (res.ok) {
        const filteredTickets = allTickets.filter((ticketData)=> ticketData._id !== ticketId);
        setAllTickets(filteredTickets);
        return;
      } else {
        console.error("Failed to delete the ticket");
      }
    } catch (error) {
      console.error("An error occured while deleting the ticket:", error);
    }
  }

  return { user, isLoading, allTickets, deleteTicket };
}

export default useTicketsData;