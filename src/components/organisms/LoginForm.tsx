import { Form } from "react-bootstrap"
import LoginButton from "../atoms/LoginButton";
import LoginFormElements from "../molecules/LoginFormElements"

type LoginFormProps = {
    onsubmit?: (e: React.FormEvent) => void;
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Errormessage?: { username: string; password: string };
}
export default function LoginForm({ onsubmit, onchange, Errormessage }: LoginFormProps) {
    return (
        <>
            <Form onSubmit={onsubmit}>
                <Form.Group className="mb-2 floating-label-group">
                    <LoginFormElements
                        type="text"
                        onchange={onchange}
                        classname="login-input"
                        text="Username"
                        Errormessage={Errormessage?.username}
                        name="username"
                    />
                    <div className="input-highlight"></div>
                </Form.Group>
                <Form.Group className="mb-2 floating-label-group">
                    <LoginFormElements
                        type="password"
                        onchange={onchange}
                        classname="login-input"
                        text="Password"
                        Errormessage={Errormessage?.password}
                        name="password"
                    />
                    <div className="input-highlight"></div>
                </Form.Group>
                <LoginButton variant="primary" type="submit" classname="w-100 login-button mb-4">
                </LoginButton>
            </Form>
        </>
    )
}