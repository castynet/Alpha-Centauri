import DashBoard from "./components/dashboard";
import User from "./components/account/user";
import { useApp } from "./components/context";
import Auth from "./components/auth/auth";
import AlertBox from "./components/general/alertBox";

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
      {app.popup.open ? <AlertBox /> : ""}
      <Display />
    </>
  );
}

export default App;
