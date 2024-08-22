"use client"
const TeamPage = () => {
    const handlePasswordReset = () => {
        console.log("line 4", process.env.NEXT_PUBLIC_TEST_EMAIL)
        try{
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
                })
                if(!handlePasswordReset.ok){
                    console.log("SOMETHING DONE BROKE!");
                } else {
                    console.log("It worked!")
                }
        } catch(error){
            console.log("error", error)
        }
    } 

    return (
      <div>
        {/* Table of team members */}
        <table>
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Employee</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scopr="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <form>
        {/* Form to invite new team member */}
        <input/>
        </form>
        <button onClick={()=> handlePasswordReset()}>Submit</button>
      </div>
    )
  }
  
  export default TeamPage