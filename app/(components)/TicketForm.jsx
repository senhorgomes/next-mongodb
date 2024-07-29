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
        status: "not started",
        active: true,
    };

    const [formData, setFormData] = useState(baseTicket);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex justify-center">
            <form>
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    required="true"
                />
                <label>Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    required="true"
                />
                <label>Category</label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    required="true"
                />
            </form>

        </div>
    )
}

export default TicketForm