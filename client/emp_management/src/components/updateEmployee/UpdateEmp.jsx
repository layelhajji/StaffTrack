import { useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { useState ,useEffect} from "react";
import './UpdateEmp.css'

const UpdateEmp = () => {
  const {id}=useParams();
  const [formData, setFormData] = useState({
    EmployeeID: "",
    fullName: "",
    age: "",
    phone: "",
    joinedDate: ""
});
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value
  });
};
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/employee/${id}`, {
       
        
      });
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  fetchUsers();
}, []);

  return (
    <div className="formulaire">
    <Form >
        <h1>Update Employee</h1>
        <Form.Group className="mb-3" controlId="formEmployeeID">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
                type="number"
                name="EmployeeID"
                value={formData.EmployeeID}
                onChange={handleInputChange}
            />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJoinedDate">
            <Form.Label>Joined Date</Form.Label>
            <Form.Control
                type="text"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleInputChange}
            />
        </Form.Group>
        
        <Button className="btn custom-button" type="submit">
            Update
        </Button>
    </Form>
</div>
  )
}

export default UpdateEmp
