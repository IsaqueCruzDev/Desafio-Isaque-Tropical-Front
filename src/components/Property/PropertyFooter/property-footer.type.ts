import usePropertyFooter from "./property-footer.infra";

export type UsePropertyFooterType = ReturnType<typeof usePropertyFooter>

export type UsePropertyFooterProps = {
    properties: PropertyType[]
}