import React from "react";
import { DialogTitle } from "@mui/material";
import styles from "./styles.module.css";
import { Modal } from "../ui";

export const CustomDialog = ({ open, onClose, title, children }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className={styles.container}>
                {title && <DialogTitle>{title}</DialogTitle>}
                {children}
            </div>
        </Modal>
    );
};
