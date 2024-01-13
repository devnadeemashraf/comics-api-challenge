import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import Providers from "./components/providers/index.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <Toaster />
    <App />
  </Providers>
);
