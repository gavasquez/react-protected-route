import { Link } from 'react-router-dom';
import { useStore } from "../hooks/useAuth";

export const Home = () => {
  const {logout} = useStore();
  return (
    <>
      <div>About</div>
      <Link to='/about'>About</Link>

      <button onClick={logout}>Logout</button>
  </>
  )
}