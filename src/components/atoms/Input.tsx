import { Form } from "react-bootstrap"
type InputProps = {
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    classname: string;
    placeholder: string;
    name: string;
}

export default function Input({ onchange, type, placeholder, classname, name }: InputProps) {
    return (
        <Form.Control
            type={type}
            onChange={onchange}
            className={classname}
            placeholder={placeholder}
            name={name}
        />
    )
}