import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { VideosContextProvider } from "./context/videoContext/videoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <VideosContextProvider>
      <App />
    </VideosContextProvider>
  </AuthContextProvider>
);
