import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/'); // Navigate to home page
      };
  return (
    <>
  <h2>About Pages</h2>
  <button onClick={goToHome}>Go Home</button>
 

   </>
  );
}

export default About;

