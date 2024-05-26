import {useEffect} from "react";
import {useAccountStore} from "./hooks/useAccountStore.js";
import Login from "./components/Login.jsx";
import AssignmentsList from "./components/AssignmentsList.jsx";
function App() {
  const {loggedIn, email, login, logout, setup,register} = useAccountStore();

  useEffect(() => {
    setup();
  }, []);

  return (
      <>
        {!loggedIn && <Login login={login} register={register}/>}
        {loggedIn && <AssignmentsList logout={logout}/>}
      </>
  )
}
export default App
