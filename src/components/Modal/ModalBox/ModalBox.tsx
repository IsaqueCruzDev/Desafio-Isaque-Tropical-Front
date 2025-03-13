import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type ModalBoxProps = {
    title: string
    text: string
    children: ReactNode
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ModalBox({ title, text, children }: ModalBoxProps) {
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