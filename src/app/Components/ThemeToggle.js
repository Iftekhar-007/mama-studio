"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
      document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}

// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useState } from "react";
// import Button from "@mui/material/Button";

// export default function ThemeToggle({ children }) {
//   const [mode, setMode] = useState("light");

//   const theme = createTheme({
//     palette: { mode },
//   });

//   const toggleMode = () => {
//     setMode((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="contained" onClick={toggleMode}>
//         {mode === "light" ? "🌞 Light" : "🌙 Dark"}
//       </Button>
//       {children}
//     </ThemeProvider>
//   );
// }
