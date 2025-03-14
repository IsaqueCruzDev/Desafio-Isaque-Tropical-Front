import ModalBoxView from "./modal-box.view";
import { ModalBoxProps } from "./model-box.type";

export default function ModalBoxViewModel(props: ModalBoxProps) {
    return <ModalBoxView {...props} />
}