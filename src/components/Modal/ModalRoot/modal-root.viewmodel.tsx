import { ModalRootProps } from "./modal-root.type";
import ModalRootView from "./modal-root.view";

export default function ModalRootViewModel(props: ModalRootProps) {
    return <ModalRootView {...props} />
}