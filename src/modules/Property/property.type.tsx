import useProperty from "./property.infra"

export type PropertyType = {
    id: string
    type: string
    label: string
    name: string
    fieldType: string
    objectType: string
    groupName: string
}

export type UsePropertyType = ReturnType<typeof useProperty>