import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login({ name: 'Akram', gender: 'Male', age: 27 }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>DesiConnect 💘</h1>
      {user.isLoggedIn ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to start matching ❤️</p>
          <button onClick={handleLogin}>Login as Akram</button>
        </>
      )}
    </div>
  );
}

export default App;
