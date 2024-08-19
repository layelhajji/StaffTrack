import { Form, Button } from "react-bootstrap";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            try {
                const response = await fetch("http://127.0.0.1:3000/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                localStorage.setItem("token", result.token);

                if (response.ok) {
                    navigate("/dashboard");
                } else {
                    console.error("Failed to login:", result.message);
                    alert(result.message); // Affiche l'erreur au client
                }
            } catch (error) {
                console.error("Error during submission:", error.message);
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
                <h1>Login Admin</h1>
                
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        minLength="6"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a password (minimum 6 characters).
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
