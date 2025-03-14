import { PropertyRootProps } from "./property-root.type";

export default function PropertyRootView({children}: PropertyRootProps) {
    return (
        <section className='min-h-screen w-full bg-blue-400 flex items-center justify-center'>
            {children}
        </section>
    )
}