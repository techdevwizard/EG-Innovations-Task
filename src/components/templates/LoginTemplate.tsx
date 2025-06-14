import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/login.css";
import LoginImage from '../../assets/images/World-rafiki.png';
import { loginUser } from '../../action/UserAction';
import { useAppDispatch } from '../../hooks/dispatch';
import type { LoginFormData, LoginFormDataError } from '../../interfaces/user';
import LoginForm from '../organisms/LoginForm';

export default function LoginTemplate() {
    const dispatch = useAppDispatch();
    const [userData, setUserData] = useState<LoginFormData>({ username: "", password: "" })
    const [userDataError, setUserDataError] = useState<LoginFormDataError>({ username: "", password: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const Error: LoginFormDataError = { username: "", password: "" };
        let valid = true;
        const trimmedUsername = userData.username.trim();
        const trimmedPassword = userData.password.trim();
        if (!trimmedUsername) {
            valid = false;
            Error.username = "Username is Required"
        }
        if (!trimmedPassword) {
            valid = false;
            Error.password = "Password is Required"
        }
        setUserDataError(Error)
        if (valid) {
            dispatch(loginUser(userData));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim();
        setUserData({ ...userData, [name]: value });
        if (!trimmedValue) {
            setUserDataError({ ...userDataError, [name]: `Enter valid ${name}` });
        } else {
            setUserDataError({ ...userDataError, [name]: "" });
        }
    };

    return (
        <>
            <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
                <Row className='shadow-lg rounded-4 overflow-hidden min-h-75 login-row'>
                    <Col lg={6} className='d-flex flex-column justify-content-center p-5'>
                        <h2 className="mb-3 fw-bold text-center">LOGIN</h2>
                        <p className='d-block text-center mb-4 sub-text'>Enter your Details to Login</p>
                        <LoginForm
                            onsubmit={handleSubmit}
                            onchange={handleChange}
                            Errormessage={userDataError}
                        />
                    </Col>
                    <Col lg={6} className="image-col">
                        <div className="login-image h-100 d-flex align-items-center justify-content-center">
                            <img src={LoginImage} alt="Decorative" className="main-image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}