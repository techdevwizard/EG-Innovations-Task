import Input from "../atoms/Input";
import Errors from "../atoms/Errors";

type LoginFormElementsProps = {
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string,
    Errormessage?: string
    classname: string;
    name: string;
    text: string
}

export default function LoginFormElements({ onchange, type, Errormessage, name, text }: LoginFormElementsProps) {
    return (
        <>
            <Input
                type={type}
                onchange={onchange}
                classname="login-input"
                placeholder={text}
                name={name}
            />
            <Errors Errormessage={Errormessage} />
        </>
    )

}