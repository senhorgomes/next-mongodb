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

    const handleSubmit = async (e) => {
        // Submit Data
        e.preventDefault();
        const res = await fetch("/api/tickets", {
            method: "POST",
            body: JSON.stringify({formData}),
            header: {
                'Content-Type': 'application/json'
            }
        }
        )
        console.log(res)

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
                <textarea
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    required={true}
                    rows={5}
                />
                <label>Category</label>
                <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    required={true}
                >
                    <option defaultValue="true" value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>
                <label>Priority</label>
                <div>
                    <input
                        id="priority-1"
                        name="priority"
                        onChange={handleChange}
                        value={1}
                        checked={formData.priority == 1}
                        type="radio"
                    />
                    <label>1</label>
                    <input
                        id="priority-2"
                        name="priority"
                        onChange={handleChange}
                        value={2}
                        checked={formData.priority == 2}
                        type="radio"
                    />
                    <label>2</label>
                    <input
                        id="priority-3"
                        name="priority"
                        onChange={handleChange}
                        value={3}
                        checked={formData.priority == 3}
                        type="radio"
                    />
                    <label>3</label>
                    <input
                        id="priority-4"
                        name="priority"
                        onChange={handleChange}
                        value={4}
                        checked={formData.priority == 4}
                        type="radio"
                    />
                    <label>4</label>
                    <input
                        id="priority-5"
                        name="priority"
                        onChange={handleChange}
                        value={5}
                        checked={formData.priority == 5}
                        type="radio"
                    />
                    <label>5</label>
                </div>
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
                <label>Progress</label>
                <input
                    type="range"
                    id="progress"
                    name="progress"
                    value={formData.progress}
                    min="0"
                    max="100"
                    onChange={handleChange}
                />
                <button className="btn">Create Ticket</button>
            </form>

        </div>
    )
}

export default TicketForm