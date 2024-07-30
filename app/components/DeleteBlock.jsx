import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {

  const router = useRouter;

  const deleteTicket = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${id}`, {method: "DELETE"});
    if(res.ok){
      router.refresh();
    }
  }

  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red" onClick={deleteTicket}/>
  )
}

export default DeleteBlock