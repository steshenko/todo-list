import React from "react";
import { Button as MUIButton } from "@mui/material";
import styles from "./styles.module.css";

export const Button = ({ variant, color, onClick, children, disabled, ...props }) => {
    return (
        <MUIButton
            variant={variant || "contained"}
            color={color || "primary"}
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
            {...props}
        >
            {children}
        </MUIButton>
    );
};
