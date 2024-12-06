import React from "react";
import { TextField } from "@mui/material";

export const InputField = ({ label, value, onChange, onBlur, error, helperText, maxLength }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            fullWidth
            inputProps={maxLength ? { maxLength: maxLength } : {}}
            style={{ marginBottom: "20px" }}
        />
    );
};
