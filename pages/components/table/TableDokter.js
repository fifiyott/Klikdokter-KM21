import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/UsersActions";
import EditUser from "../modal/EditUser";

const TableDokter = () => {
    const dispatch = useDispatch();
    const allUsersData = useSelector((state) => state.Users);
    const { loading, error, users } = allUsersData;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">No. HP</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th>...</th>
            </tr>
        </thead>
        <tbody>
            {}
            {loading ?  <tr className="spinner-border" role="status">
                            <td className="sr-only">Loading...</td>
                        </tr>
                : error ? error.message
                : users.map((user) => (
                    <tr key={user.id}>
                        <td scope="row">{user.id}</td>
                        <td>{user.name.firstname.toLowerCase() + " " + user.name.lastname}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td><EditUser /></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    );
}
 
export default TableDokter;
