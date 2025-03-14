import { PropertyRootProps } from "./property-root.type";
import PropertyRootView from "./property-root.view";

export default function PropertyRootViewModel(props: PropertyRootProps) {
    return <PropertyRootView {...props} />
}