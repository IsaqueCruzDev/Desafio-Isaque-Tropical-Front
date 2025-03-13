import usePropertyHeader from "./property-header.infra";
import { PropertyHeaderViewModelProps } from "./property-header.type";
import PropertyHeaderView from "./property-header.view";

export default function PropertyHeaderViewModel({ addProperty, uploadFile}: PropertyHeaderViewModelProps) {
    const { fileInputRef, handleClickButton, handleFileChange } = usePropertyHeader()
    return (
        <PropertyHeaderView 
            fileInputRef={fileInputRef} 
            handleClickButton={handleClickButton} 
            handleFileChange={handleFileChange} 
            addProperty={addProperty} 
            uploadFile={uploadFile} 
        />
    )
}