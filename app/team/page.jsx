import TicketForm from "@/app/components/TicketForm"

const TeamPage = () => {
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
        <button>Submit</button>
        </form>
      </div>
    )
  }
  
  export default TeamPage