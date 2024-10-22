import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../hooks/useAuth";

export const Login = () => {

  const { register, handleSubmit } = useForm();
  const { login } = useStore();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
    navigate('/about');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" {...register('email')} placeholder="Ingresa el email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" {...register('password')} placeholder="Ingresa la contraseña"/>
      </div>
      <input type="submit" value="Ingresar" className="btn btn-primary" />
    </form>
  )
}