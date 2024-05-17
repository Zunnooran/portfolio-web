import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { themeData } from "../data/themeData";
import { ThemeType } from "../theme/types";

type ThemeContextType = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  theme: ThemeType;
  toggleDrawer: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({
  setDrawerOpen: () => {},
  setTheme: () => {},
  toggleDrawer: () => {},
  drawerOpen: false,
  theme: themeData.theme,
});

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData.theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
  }, []);

  const contextValue = useMemo(
    () => ({ drawerOpen, setDrawerOpen, toggleDrawer, theme, setTheme }),
    [drawerOpen, theme, toggleDrawer]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

const useThemeContext = () => useContext(ThemeContext);

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeContextProvider, useThemeContext };
