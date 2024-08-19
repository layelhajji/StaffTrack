import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './add.css';

const AddEmp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        EmployeeID: "",
        fullName: "",
        age: "",
        phone: "",
        joinedDate: ""
    });
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log("Form submitted!");

            try {
                const response = await fetch("http://127.0.0.1:3000/api/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                console.log("Result:", result);

                if (response.ok) {
                    alert("Employee added successfully");
                    console.log("c bon ");
                    navigate("/dashboard");
                } else if (response.status === 409) {
                    alert("Employee already exists");
                } else {
                    console.error("Failed to add:", result.message);
                }
            } catch (error) {
                console.error("Error during submission:", error.message);
            } finally {
                setFormData({
                    EmployeeID: "",
                    fullName: "",
                    age: "",
                    phone: "",
                    joinedDate: ""
                });
            }
        }

        setValidated(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="formulaire">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Add Employee</h1>

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
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide an age.
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
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddEmp;
