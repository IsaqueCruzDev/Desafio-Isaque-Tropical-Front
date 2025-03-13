import { PropertyType } from "../../../modules/Property/property.type";
import usePropertyFooter from "./property-footer.infra";
import PropertyFooterView from "./property-footer.view";

type PropertyFooterViewModelProps = {
    properties: PropertyType[]
    clearProperties: () => void
}

export default function PropertyFooterViewModel({ properties, clearProperties }: PropertyFooterViewModelProps) {
    const methods = usePropertyFooter({ properties })
    return <PropertyFooterView {...methods} clearProperties={clearProperties}/>
}