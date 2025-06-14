import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/pages/LoginPage';
import ProfilePage from './Components/pages/ProfilePage';
import { useSelector } from 'react-redux';
import type { RootState } from './store';


function App() {
    const { token } = useSelector((state: RootState) => state.user);

  if (token) {
    return (
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/profile" replace />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
}

export default App;
