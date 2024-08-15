import './Dashboard.css'
import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {
  const [Employees, setEmployees] = useState([]);
  const navigate=useNavigate();
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
  async function handleDelete(userId) {
    try {
      const response = await fetch(`http://localhost:3000/api/employee/${userId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        setEmployees(prevEmployees => prevEmployees.filter(emp => emp._id !== userId));
        console.log('Employee deleted successfully');
      } else {
        console.error('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }
  const handleUpdate=(userId)=>{
    navigate(`/employee/${userId}`)

  }

  return (
    
    
    <div >
    <h1 className='titre'>Employees List</h1>
      
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
                <Button variant="dark"  onClick={()=>handleUpdate(Employee._id)}>Update</Button>
                <Button variant="danger"
                onClick={()=>handleDelete(Employee._id)}>Delete</Button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
   
  );
};

export default Dashboard;
