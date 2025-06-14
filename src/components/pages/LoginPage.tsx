import LoginTemplate from "../templates/LoginTemplate";

const LoginPage = () => {
    return (
        <>
            <div className="bg-wrapper">
                <div className="bg-image"></div>
                <div className="bg-blur"></div>
            </div>
            <LoginTemplate />
        </>
    );
};

export default LoginPage;