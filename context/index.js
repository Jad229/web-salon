"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isAdminView, setIsAdminView] = useState(false);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
