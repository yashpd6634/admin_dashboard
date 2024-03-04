import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { VideosContextProvider } from "./context/videoContext/videoContext";
import { ListsContextProvider } from "./context/listContext/listContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <VideosContextProvider>
      <ListsContextProvider>
        <App />
      </ListsContextProvider>
    </VideosContextProvider>
  </AuthContextProvider>
);
