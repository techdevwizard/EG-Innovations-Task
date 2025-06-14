import { Button, Image } from 'react-bootstrap';
import profileImg from '../../assets/images/da589b62-67b0-439a-8f5d-e7cae3e39835.jpg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, logOut } from '../../action/UserAction';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../hooks/dispatch';
import { confirmPopup, successToaster } from '../../utils/swal';

const ProfileTemplate = () => {
    const dispatch = useAppDispatch();
    const { username } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!username)
            dispatch(getUser());
    }, []);

    const handleLogout = () => {
        confirmPopup(`You will be logged out, ${username}`).then((result) => {
            if (result.isConfirmed) {
                successToaster("Logging out...")
                setTimeout(() => {
                    dispatch(logOut());
                }, 2000);
            }
        });
    };


    return (
        <div className="profile-welcome-container">
            <div className="profile-card">
                <div className="decorative-circle"></div>
                <div className="decorative-circle-2"></div>

                <div className="card-content">
                    <h1 className="welcome-title">Welcome Back</h1>
                    <p className="welcome-subtitle">Here's your profile information</p>
                    <Image
                        src={profileImg}
                        alt="Profile"
                        className="profile-img"
                    />
                    <h2 className="user-name">{username}!</h2>
                    <Button className="logout-btn" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default ProfileTemplate;