import useProperty from "./property.infra";
import PropertyView from "./property.view";

export default function PropertyViewModel() {
    const methods = useProperty();
    return <PropertyView {...methods} />
}