import { GeneralProps } from "./property-container.type";

export default function PropertyContainerView({children}: GeneralProps) {
    return (
        <div className='bg-white min-w-6xl rounded p-3'>
            {children}
        </div>
    )
}