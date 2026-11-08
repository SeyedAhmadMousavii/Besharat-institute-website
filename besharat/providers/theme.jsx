"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function AppThemeProvider({ children }) {
    return (
        <ThemeProvider>
            <div>{children}</div>
        </ThemeProvider>
    );
}