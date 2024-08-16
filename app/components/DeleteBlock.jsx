"use client"

import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = ({ id, onDelete }) => {

  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${id}`, {method: "DELETE"});

      if(res.ok){
        router.refresh();
      } else {
        console.error("Failed to delete the ticket");
      }
    } catch (error) {
      console.error("An error occured while deleting the ticket:", error);
    }
  }

  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red" onClick={onDelete}/>
  )
}

export default DeleteBlock