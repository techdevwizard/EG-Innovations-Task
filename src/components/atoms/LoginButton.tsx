import { Button } from "react-bootstrap";
type ButtonProps = {
    variant: string,
    type: "button" | "reset" | "submit",
    classname: string,
    children?: React.ReactNode;
}

export default function LoginButton({ variant, type, classname }: ButtonProps) {
    return (
        <Button variant={variant} type={type} className={classname}>
            Login
        </Button>
    );
}