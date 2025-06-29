import { useNavigate } from 'react-router-dom';

function ProtectedRouteExample() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/'); // Navigate to home page
      };
  return (
    <>
  <h2>Protected Route</h2>
   </>
  );
}

export default ProtectedRouteExample;

