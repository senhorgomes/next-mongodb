"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCard from "./components/TicketCard";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import useTicketsData from "./hooks/useTicketsData";
// Check if user is logged in before making the ticket call
// Utilize isLoading
// Until that is done, then populate user/rest of the information

export default function Dashboard() {

  const {user, isLoading, allTickets, deleteTicket } = useTicketsData();

  const uniqueCategories = [
    ...new Set(allTickets?.map(({ category }) => category))
  ]
  
  if(isLoading){
    return (
      <main className="p-5">
        <h1>Loading...</h1>
      </main>
    )
  }
  if (!user) {
    return (
      <main className="p-5">
        <h1>Sorry, it appears our services are down. <FontAwesomeIcon icon={faPoo} /></h1>
        <br />
        <h2>We apologize for the inconvience.</h2>
      </main>
    )
  }
  return (
    <>
    {user &&
      (
        <main className="p-5">
        <section>
          {allTickets && uniqueCategories?.map((uniqueCategory) =>
            <div key={uniqueCategory} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {allTickets.reduce((filteredTickets, singleTicket) => {
                if (singleTicket.category === uniqueCategory) {
                  filteredTickets.push(<TicketCard key={singleTicket._id} {...singleTicket} deleteTicket={deleteTicket} />);
                }
                return filteredTickets;
              }, [])}
              </div>
            </div>
          )}
        </section>
      </main>
      )
    }
   </>
  );
}
