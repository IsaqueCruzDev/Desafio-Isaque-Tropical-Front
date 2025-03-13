import PropertyContainerView from "./property-container.view";
import { GeneralProps } from "./property-container.type";

export default function PropertyContainerViewModel({ children }: GeneralProps) {
    return <PropertyContainerView>
                {children}
            </PropertyContainerView>
}