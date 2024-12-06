import React from "react";
import { Button } from "../ui";
import { CustomDialog } from "../CustomDialog";
import styles from "./styles.module.css";

export const DeleteTodoDialog = ({ open, todo, onClose, onDelete }) => {
    const buttons = [
        {
            label: "Cancel",
            color: "primary",
            onClick: onClose,
        },
        {
            label: "Confirm",
            color: "secondary",
            onClick: () => {
                onDelete(todo.id);
                onClose();
            },
        },
    ];

    return (
        <CustomDialog open={open} onClose={onClose} title="Are you sure you want to delete this item?">
            <div className={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        onClick={button.onClick}
                        variant="outlined"
                        color={button.color}
                        className={styles.button}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </CustomDialog>
    );
};
