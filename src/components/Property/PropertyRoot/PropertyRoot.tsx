import { ReactNode } from "react";

interface PropertyRootProps {
    children: ReactNode
}

export default function PropertyRoot({children}: PropertyRootProps) {
    return (
        <section className='min-h-screen w-full bg-blue-400 flex items-center justify-center'>
            {children}
        </section>
    )
}