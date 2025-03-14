import { ModalFooterProps } from "./modal-footer.type";
import ModalFooterView from "./modal-footer.view";

export default function ModalFooterViewModel(props: ModalFooterProps) {
    return <ModalFooterView {...props}/>
}