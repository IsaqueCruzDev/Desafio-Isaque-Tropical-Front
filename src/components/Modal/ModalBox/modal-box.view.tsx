import { Box, Typography } from "@mui/material";
import { ModalBoxProps } from "./model-box.type";
import { style } from "./modal-box.infra";

export default function ModalBoxView({ title, text, children }: ModalBoxProps) {
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {text}
            </Typography>
            {children}
        </Box>
    )
}