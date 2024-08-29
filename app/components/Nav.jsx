"use client";

import { faHome, faTicket, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
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
                {user &&
                <>
                <Link href="/ticket-page/new">
                    <FontAwesomeIcon icon={faTicket} className="icon" />
                </Link>
                <Link href="/team">
                    <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                </Link>
                </>
            }
            </div>
            {/* login */}

            {!user &&
                <Link href="/api/auth/login">
                    <button className="btn">Login</button>
                </Link>
            }
            {user &&
                <div className="flex justify-between items-center">
                    <p className="text-default-text">{user.name}</p>
                    <Link href="/api/auth/logout">
                        <button className="btn">Logout</button>
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Nav