type ErrorProps = {
    Errormessage?: string
}

export default function Errors({ Errormessage }: ErrorProps) {
    return (
        <span className="error-message" style={{ color: "red" }}>{Errormessage}</span>
    )
}