import { TComic } from "@/types/api-response";
import { TChildrenProps } from "@/types/globals";
import { createContext, useState } from "react";

type TViewedComic = {
  [id: string]: TComic & {
    rating: number;
  };
};

export type TAppContext = {
  viewed: TViewedComic[];
  setViewed: React.Dispatch<React.SetStateAction<TViewedComic[]>>;
};

export const AppContext = createContext<TAppContext>({
  viewed: [],
  setViewed: () => null,
});

const AppContextProvider = ({ children }: TChildrenProps) => {
  const [viewed, setViewed] = useState<TViewedComic[]>([]);

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
