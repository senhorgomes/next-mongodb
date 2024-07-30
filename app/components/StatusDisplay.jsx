import React from 'react'

const StatusDisplay = ({status}) => {
  
  // Pending, Started, Completed
  const getColor = (status) => {
    if(!status){
      return "bg-slate-700";
    }
    let labelColor = "bg-slate-700"
    switch (status.toLowerCase()) {
      case "completed":
        labelColor = "bg-green-200";
        return labelColor;
      case "started":
        labelColor = "bg-yellow-200";
        return labelColor;
      case "pending":
        labelColor = "bg-red-200";
        return labelColor;
    }
    return labelColor;
  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay