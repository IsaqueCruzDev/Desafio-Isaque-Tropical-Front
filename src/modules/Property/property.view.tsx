import PropertyCompose from '../../components/Property/index';
import { UsePropertyType } from './property.type';

export default function PropertyView(props: UsePropertyType) {
  const { properties, addProperty, clearProperties, removeProperty, updateProperty, uploadFile } = props

    return (
      <>
        <PropertyCompose.Root>
        <PropertyCompose.Container>
            <PropertyCompose.Header addProperty={addProperty} uploadFile={uploadFile} />
            <PropertyCompose.ItemList 
              properties={properties} 
              removeProperty={removeProperty}
              updateProperty={updateProperty} 
            />
            <PropertyCompose.Footer properties={properties} clearProperties={clearProperties} />
          </PropertyCompose.Container>
        </PropertyCompose.Root>
      </>
    )
}