import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ _id, title, description, progress, priority, status, createdAt }) => {

  const formatTimestamp = (timestamp) => {
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-GB", options);

    return formattedDate;
  }


  return (
    <article className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <header className="flex mb-3">
        <PriorityDisplay priority={priority} />
        <div className="ml-auto">
          <DeleteBlock id={_id} />
        </div>
      </header>
      <Link href={`/ticket-page/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex-grow">

        </div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(createdAt)}</p>
            <ProgressDisplay progress={progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={status} />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default TicketCard