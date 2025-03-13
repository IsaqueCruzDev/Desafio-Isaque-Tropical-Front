import { useStore } from "../../infra/context/store/property/property.store";
import { PropertyStoreType } from "../../infra/context/store/property/property.store.type";

export default function useProperty() {
    const properties = useStore((state: PropertyStoreType) => state.properties);
    const addProperty = useStore((state: PropertyStoreType) => state.addProperty);
    const removeProperty = useStore((state: PropertyStoreType) => state.removeProperty);
    const updateProperty = useStore((state: PropertyStoreType) => state.updateProperty);
    const clearProperties = useStore((state: PropertyStoreType) => state.clearProperties);
    const uploadFile = useStore((state: PropertyStoreType) => state.uploadFile)

    return {
        properties,
        addProperty,
        removeProperty,
        updateProperty,
        clearProperties,
        uploadFile
    }
}