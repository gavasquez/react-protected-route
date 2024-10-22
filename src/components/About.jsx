import { Link } from 'react-router-dom';
import { useStore } from "../hooks/useAuth";


export const About = () => {
  const {logout} = useStore();

  return (
    <>
      <div>About</div>
      <Link to='/'>Home</Link>
      <button onClick={logout}>Logout</button>
    </>
  )
}