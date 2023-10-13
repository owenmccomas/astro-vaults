import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export const Layout = ({children, className}:{children: ReactNode, className?: string}) => {
    
    return <main className={`h-screen ${className}`}>
        {children}
    </main>
}