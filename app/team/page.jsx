"use client"

const dummyInfo = [{
  id: 1,
  first_name: "Jacquenette",
  last_name: "Chieco",
  email: "jchieco0@kickstarter.com",
  role: "HR"
}, {
  id: 2,
  first_name: "Tremaine",
  last_name: "Redwin",
  email: "tredwin1@ebay.com",
  role: "Software Engineer"
}, {
  id: 3,
  first_name: "Lynnelle",
  last_name: "Sircomb",
  email: "lsircomb2@digg.com",
  role: "Software Engineer"
}]
const TeamPage = () => {
  const handlePasswordReset = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}/dbconnections/change_password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
          email: process.env.NEXT_PUBLIC_TEST_EMAIL,
          connection: 'Username-Password-Authentication',
        }),
      }).then((res) => {
        res.json()
      })
      .then((data) => data)
      .catch((error) => {
        console.log("Something Broke:", error)
      })

  }

  return (
    <div>
      {/* Table of team members */}
      <table class="table-auto w-full border-collapse bg-card shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th scope="col" class="px-4 py-2 text-left text-sm font-semibold">First Name</th>
            <th scope="col" class="px-4 py-2 text-left text-sm font-semibold">Last Name</th>
            <th scope="col" class="px-4 py-2 text-left text-sm font-semibold">Email</th>
            <th scope="col" class="px-4 py-2 text-left text-sm font-semibold">Role</th>
          </tr>
        </thead>
        <tbody>
          {dummyInfo.map((employee, index)=> 
          <tr class={`${index % 2 === 0 ? 'bg-slate-400' : 'bg-slate-500'} hover:bg-gray-100 transition-colors duration-200`}>
            <td scope="row" class="px-4 py-2 text-sm">{employee.first_name}</td>
            <td scope="row" class="px-4 py-2 text-sm">{employee.last_name}</td>
            <td scope="row" class="px-4 py-2 text-sm">{employee.email}</td>
            <td scope="row" class="px-4 py-2 text-sm">{employee.role}</td>
          </tr>
          )}
        </tbody>
      </table>
      <form>
        {/* Form to invite new team member */}
        <input />
      </form>
      <button onClick={() => handlePasswordReset()}>Submit</button>
    </div>
  )
}

export default TeamPage