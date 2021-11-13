import DashBoard from "./components/dashboard";
import User from "./components/account/user";
import { useApp } from "./components/context";
import Auth from "./components/auth/auth";

function App() {
  const app = useApp();

  const Display = () => {
    if (app.rawUser) {
      return (
        <>
          <User />
          <DashBoard />
        </>
      );
    } else {
      return <Auth />;
    }
  };

  return (
    <>
      <Display />
    </>
  );
}

export default App;
