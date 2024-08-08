import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link"

const Nav = () => {

    const { user, isLoading } = useUser();
    return (
        <nav className="flex justify-between bg-nav p-4">
            {/* icons */}
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                </Link>
                <Link href="/ticket-page/new">
                    <FontAwesomeIcon icon={faTicket} className="icon" />
                </Link>
            </div>
            {/* login */}
            <div>
                <p className="text-default-text">fake@email.com </p>
            </div>
            {!user &&
                <Link href="#">
                    <button className="btn">Login</button>
                </Link>
            }
        </nav>
    )
}

export default Nav