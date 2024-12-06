import React, { useState } from "react";
import { Button, InputField } from "../ui";
import styles from "./styles.module.css";

export const TodoForm = ({
                             title,
                             description,
                             onTitleChange,
                             onDescriptionChange,
                             onSave,
                         }) => {
    const MIN_TITLE_LENGTH = 3;
    const MAX_DESCRIPTION_LENGTH = 255;

    const [isTitleBlurred, setIsTitleBlurred] = useState(false);

    const isFormValid = title.trim().length >= MIN_TITLE_LENGTH;

    const handleTitleBlur = () => {
        setIsTitleBlurred(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            onSave();
        }
    };

    const formFields = [
        {
            label: "Title",
            value: title,
            onChange: onTitleChange,
            onBlur: handleTitleBlur,
            error: isTitleBlurred && title.trim().length > 0 && title.trim().length < MIN_TITLE_LENGTH,
            helperText: isTitleBlurred && title.trim().length > 0 && title.trim().length < MIN_TITLE_LENGTH
                ? "Please enter at least three characters"
                : "",
            maxLength: null
        },
        {
            label: "Description",
            value: description,
            onChange: onDescriptionChange,
            onBlur: null,
            error: false,
            helperText: "",
            maxLength: MAX_DESCRIPTION_LENGTH
        },
    ];

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    error={field.error}
                    helperText={field.helperText}
                    maxLength={field.maxLength}
                />
            ))}
            <Button
                type="submit"
                variant="contained"
                className={styles.button}
                disabled={!isFormValid}
            >
                Save
            </Button>
        </form>
    );
};
