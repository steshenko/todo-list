import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

export const Modal = ({ open, onClose, onConfirm, title, children, confirmLabel = "Confirm", cancelLabel = "Cancel" }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    {cancelLabel}
                </Button>
                <Button onClick={onConfirm} color="primary">
                    {confirmLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
