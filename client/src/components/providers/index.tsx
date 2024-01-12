import AppContextProvider from "./app-context";
import { ThemeProvider } from "./theme-provider";

import { TChildrenProps } from "@/types/globals";

const Providers = ({ children }: TChildrenProps) => {
  return (
    <AppContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default Providers;
