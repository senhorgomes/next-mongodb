"use client"

import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

const TicketForm = () => {

    const baseTicket = {
        title: "",
        description: "",
        category: "Hardware Problem",
        priority: 1,
        progress: 0,
        status: "Pending",
    };

    const [formData, setFormData] = useState(baseTicket);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)
        setFormData((prev) => ({ ...prev, [name]: value }))
        console.log(formData)
    }

    const handleSubmit = () => {
        // Submit Data
    }
    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="POST" onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    required={true}
                />
                <label>Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    required={true}
                />
                <label>Category</label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    required={true}
                />
                <label>Status</label>
                <select
                    id="status"
                    name="status"
                    onChange={handleChange}
                    required={true}
                >
                    <option defaultValue="true" value="Pending">Pending</option>
                    <option value="Started">Started</option>
                    <option value="Completed">Completed</option>
                    </select>
            </form>

        </div>
    )
}

export default TicketForm