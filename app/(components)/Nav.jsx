import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav>
        {/* icons */}
        <div>
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon"/>
            </Link>
            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={faTicket} className="icon"/>
            </Link>
        </div>
        {/* login */}
        <div>
            <p  className="text-default-text">fake@email.com </p>
        </div>
    </nav>
  )
}

export default Nav