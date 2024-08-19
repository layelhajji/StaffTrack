import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './UpdateEmp.css';

const UpdateEmp = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        EmployeeID: "",
        fullName: "",
        age: "",
        phone: "",
        joinedDate: ""
    });
    const [validated, setValidated] = useState(false);

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
                const response = await fetch(`http://localhost:3000/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                const response = await fetch(`http://127.0.0.1:3000/api/employee/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                console.log("Result:", result);

                if (response.ok) {
                    alert("Employee updated successfully");
                    navigate("/dashboard");
                } else if (response.status === 409) {
                    alert("Employee already exists");
                } else {
                    console.error("Failed to update:", result.message);
                }
            } catch (error) {
                console.error("Error during submission:", error.message);
            }
        }

        setValidated(true);
    };

    return (
        <div className="formulaire">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Update Employee</h1>
                <Form.Group className="mb-3" controlId="formEmployeeID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                        type="number"
                        name="EmployeeID"
                        value={formData.EmployeeID}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide an Employee ID.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a full name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="18"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid age (18+).
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a mobile number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formJoinedDate">
                    <Form.Label>Joined Date</Form.Label>
                    <Form.Control
                        type="text"
                        name="joinedDate"
                        value={formData.joinedDate}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a joined date.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="btn custom-button" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateEmp;
