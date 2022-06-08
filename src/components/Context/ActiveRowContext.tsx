import { createContext, ReactElement, useState, ReactNode } from "react";

type RowContextProps = {
  children: ReactNode;
};

type RowContextType = {
  activeRow: number | undefined;
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const RowContext = createContext<RowContextType | undefined>(undefined);

const RowContextProvider: React.FC<RowContextProps> = ({ children }) => {
  const [activeRow, setActiveRow] = useState<number>();
  const value = { activeRow, setActiveRow };
  return <RowContext.Provider value={value}>{children}</RowContext.Provider>;
};

export { RowContextProvider, RowContext };    
export type { RowContextType };

