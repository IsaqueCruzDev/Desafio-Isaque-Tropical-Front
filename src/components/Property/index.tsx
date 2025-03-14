import PropertyContainer from "./PropertyContainer/property-container.viewmodel";
import PropertyFooter from "./PropertyFooter/property-footer.viewmodel";
import PropertyHeader from "./PropertyHeader/property-header.viewmodel";
import PropertyItemList from "./PropertyItemList/property-item.viewmodel";
import PropertyRoot from "./PropertyRoot/property-root.viewmodel";

const PropertyCompose = {
    Root: PropertyRoot,
    Container: PropertyContainer,
    Header: PropertyHeader,
    ItemList: PropertyItemList,
    Footer: PropertyFooter
}

export default PropertyCompose;