import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const InputSelect = ({ label, value, onChange, options }) => {
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
