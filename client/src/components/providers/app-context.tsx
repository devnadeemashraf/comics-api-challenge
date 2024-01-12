import { TChildrenProps } from "@/types/globals";
import { createContext, useState } from "react";

export type TAppContext = {
  viewed: string[];
  setViewed: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AppContext = createContext<TAppContext>({
  viewed: [],
  setViewed: () => null,
});

const AppContextProvider = ({ children }: TChildrenProps) => {
  const [viewed, setViewed] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        viewed,
        setViewed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
