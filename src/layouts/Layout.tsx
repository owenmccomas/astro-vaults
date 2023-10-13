import { ReactNode } from "react";

export const Layout = ({children, className}:{children: ReactNode, className?: string}) => {
    
    return <main className={`h-screen ${className}`}>
        {children}
    </main>
}