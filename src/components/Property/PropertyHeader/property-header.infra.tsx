import { ChangeEvent, useRef } from "react";
import useProperty from "../../../modules/Property/property.infra";

export default function usePropertyHeader() {
    const { uploadFile } = useProperty()
    const fileInputRef = useRef<HTMLInputElement>(null);
       
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            uploadFile(file);
        }
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.value = ''
        } 
    }

    const handleClickButton = () => {
        fileInputRef.current?.click();
    }

    return {
        fileInputRef,
        handleFileChange,
        handleClickButton
    }
}