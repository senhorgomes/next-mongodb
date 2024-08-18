"use client"

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = ({ onDelete }) => {

  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red" onClick={onDelete}/>
  )
}

export default DeleteBlock