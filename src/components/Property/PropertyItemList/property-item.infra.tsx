import { useEffect, useState } from "react";
import { UsePropertyItemListProps } from "./property-item.type";
import { getPropertyGroups } from "../../../modules/Property/property.server";

export default function usePropertyItemList({ properties }: UsePropertyItemListProps) {
    const [propertyGroups, setPropertyGroups] = useState<{ [key: string]: string[]}>({});

    useEffect(() => {
        const fetchPropertyGroups = async () => {
            const groups: { [key: string]: string[]} = {};
            for (const property of properties) {
                if (!groups[property.objectType]) {
                    try {
                        const groupNames = await getPropertyGroups(property.objectType);
                        groups[property.objectType] = groupNames;
                    } catch (error) { 
                        console.error(`Error fetching property groups for ${property.objectType}`, error);
                    }
                }
            }
            setPropertyGroups(groups);
        }
        fetchPropertyGroups();
    }, [properties.map((property) => property.objectType).join(',')]);

    return {
        propertyGroups
    }
}