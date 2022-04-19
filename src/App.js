import { Router } from "./router/Router";
import "./styles.css";

import { UserProvider } from "./components/providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
