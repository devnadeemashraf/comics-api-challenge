import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";

import { ThemeProvider } from "./theme-provider";

import { TChildrenProps } from "@/types/globals";

const Providers = ({ children }: TChildrenProps) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
