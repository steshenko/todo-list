import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import styles from "./styles.module.css";

export const CustomDialog = ({ open, onClose, title, children }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <div className={styles.container}>
                {title && <DialogTitle>{title}</DialogTitle>}
                {children}
            </div>
        </Dialog>
    );
};
