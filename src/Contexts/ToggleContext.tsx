import { createContext, useContext, useState, type ReactNode } from "react";

// Types Definition
interface ToggleContextType {
  isToggleOpen: boolean;
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Data Initialization
const ToggleContext = createContext<ToggleContextType>({} as ToggleContextType);

// Provider Component
export function ToggleProvider({ children }: { children: ReactNode }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isToggleOpen, setIsToggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
}

// Custom Hook
export function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("ToggleContext was used outside of ToggleProvider");

  return context;
}
