import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
const useTicketsData = () => {

    const [allTickets, setAllTickets] = useState([]);
    const { user, isLoading } = useUser();
    useEffect(() => {
        const getTickets = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, { cache: "no-store" });
                // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, { cache: "no-store", credentials: "include" });
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

    return {user, isLoading, allTickets};
}

export default useTicketsData;