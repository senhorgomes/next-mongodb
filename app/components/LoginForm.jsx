"use client"

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';


const LoginForm = () => {
    const {user, isLoading} = useUser();
    const router = useRouter();
    const isEditMode = !!_id;
    const baseUserInformation = {
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
    };

    const [userInformation, setUserInformation] = useState(baseTicbaseUserInformationket);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        // Submit Data
        e.preventDefault();
        const url = isEditMode ? `${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${_id}` : `${process.env.NEXT_PUBLIC_API_URL}/api/tickets`
        const method = isEditMode ? "PUT" : "POST"
        const res = await fetch(url, {
            method: method,
            body: JSON.stringify({formData}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        if(res.ok){
            router.replace("/");
            router.refresh();
        }
    }
    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="POST" onSubmit={handleSubmit}>
                <h3>{isEditMode ? "Update Your Ticket" : "Create Your Ticket"}</h3>
                <label>First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required={true}
                />
                <label>Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required={true}
                />
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                />
                <button className="btn">{isEditMode ? "Update User Information" : "Create User"}</button>
            </form>

        </div>
    )
}

export default LoginForm