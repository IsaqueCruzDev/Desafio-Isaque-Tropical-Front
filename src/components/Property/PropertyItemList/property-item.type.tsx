import { PropertyType } from "../../../modules/Property/property.type"

export type PropertyItemListProps = {
    properties: PropertyType[]
    propertyGroups: { [key: string]: string[]}
    removeProperty: (id: string) => void
    updateProperty: (id: string, field: string, value: string) => void
}

export type UsePropertyItemListProps = {
    properties: PropertyType[]
}

export type PropertyItemListViewModelProps = {
    properties: PropertyType[]
    removeProperty: (id: string) => void
    updateProperty: (id: string, field: string, value: string) => void
}