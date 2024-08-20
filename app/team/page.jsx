import TicketForm from "@/app/components/TicketForm"

const TeamPage = async () => {
    const handlePasswordReset = await fetch(
        `https://${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/change_password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            email: process.env.TEST_EMAIL,
            connection: 'Username-Password-Authentication',
          }),
        })
        if(!handlePasswordReset.ok){
            console.log("SOMETHING DONE BROKE!");
        } else {
            console.log("It worked!")
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