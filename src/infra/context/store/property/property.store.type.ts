import { PropertyType } from "../../../../modules/Property/property.type"

export type PropertyStoreType = {
    properties: PropertyType[]
    addProperty: () => void
    removeProperty: (id: string) => void
    updateProperty: (id: string, field: string, value: string) => void
    clearProperties: () => void
    uploadFile: (file: File) => void
}