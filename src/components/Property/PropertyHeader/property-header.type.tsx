import { ChangeEvent, Ref } from "react"

export type PropertyHeaderViewProps = {
    fileInputRef: Ref<HTMLInputElement> | undefined
    addProperty: () => void
    uploadFile: (file: File) => void
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleClickButton: () => void
}

export type PropertyHeaderViewModelProps = {
    uploadFile: (file: File) => void
    addProperty: () => void
}
