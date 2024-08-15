import './Dashboard.css'
import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';




const Dashboard = () => {
  const [Employees, setEmployees] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/employee', {
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <h1 className='titre'>Employees List</h1>
    <div >
      
      
      <table>
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Mobile Number</th>
            <th>Joined Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map(Employee => (
            <tr key={Employee._id}>
              <td>{Employee.EmployeeID}</td>
              <td>{Employee.fullName}</td>
              <td>{Employee.age}</td>
              <td>{Employee.phone}</td>
              <td>{Employee.joinedDate}</td>
              <td className='action'>
                <Button variant="dark">Update</Button>
                <Button variant="danger">Delete</Button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
   
  );
};

export default Dashboard;
