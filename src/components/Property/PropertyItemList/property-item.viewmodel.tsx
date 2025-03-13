import PropertyItemListView from "./property-item.view";
import usePropertyItemList from "./property-item.infra";
import { PropertyItemListViewModelProps } from "./property-item.type";

export default function PropertyItemListViewModel({ properties, removeProperty, updateProperty }: PropertyItemListViewModelProps) {
    const { propertyGroups } = usePropertyItemList({ properties })
    return (
        <PropertyItemListView 
            properties={properties} 
            propertyGroups={propertyGroups} 
            removeProperty={removeProperty} 
            updateProperty={updateProperty} 
        />
    )
}