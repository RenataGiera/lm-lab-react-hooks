import { createContext } from "react";

export interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}
export const ThemeContext =  createContext<Theme>({
  backgroundColor: "",
  color: "",
  padding: "",
  margin: ""
});
