

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.password) {
            alert("Please fill in both email and password.");
            return;
        }
    
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
            <Form onSubmit={handleSubmit}>
                <h1>Login Admin</h1>
                
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                
                <br/>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login

