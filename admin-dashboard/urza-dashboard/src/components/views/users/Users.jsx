import React, { Component } from 'react';
import allUsersRequest from "../../../requests/allUsers";
import "../../../App.css";

class UsersList extends Component {
     constructor(props) {
    super(props);
    this.state = {
     allUsers: [
         {
             name: "loading",
             category: {
                 name: "loading",
             },
             price: "loading",
             qty_stock: "loading",
             qty_sales: "loading",
             
         }
     ],
    };
  }

    async componentDidMount() {
    const usersRequest = await allUsersRequest.getAllUsers();
    const allUsers = usersRequest.data.users;

    this.setState({
      allUsers,
    });
    }

    render() {
		return (
			<table className="m-5 table table-striped">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Telefono</th>
                </tr>
                    {
                    this.state.allUsers.map((user)=>{
                        return(
                            <tr>
                                <td>
                                    {user.first_name}
                                </td>
                                <td>
                                    {user.last_name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.phone}
                                </td>
                            </tr>
                        )
                    })}              
            </table>
		);
	};

}


export default UsersList;