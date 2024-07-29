import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"
const TicketCard = ({title, description, progress, priority, status}) => {
  return (
    <article className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <header className="flex mb-3">
        <PriorityDisplay priority={priority}/>
        <div className="ml-auto">
            <DeleteBlock/>
        </div>
      </header>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2"/>
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow">

      </div>
      <div className="flex mt-2">
        <div className="flex flex-col">
            <p className="text-xs my-1">8/31/2024 10:43PM</p>
            <ProgressDisplay progress={progress}/>
        </div>
        <div className="ml-auto flex items-end">
            <StatusDisplay status={status}/>
        </div>
      </div>
    </article>
  )
}

export default TicketCard