import React from "react";
import { Button } from "../ui";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const buttons = [
        {
            label: "Previous",
            onClick: () => onPageChange(currentPage - 1),
            disabled: currentPage === 1,
        },
        {
            label: "Next",
            onClick: () => onPageChange(currentPage + 1),
            disabled: currentPage === totalPages,
        },
    ];

    return (
        <div className={styles.paginationContainer}>
            {buttons.map((button, index) => (
                <React.Fragment key={uuidv4()}>
                    <Button
                        variant="outlined"
                        onClick={button.onClick}
                        disabled={button.disabled}
                        className={styles.paginationButton}
                    >
                        {button.label}
                    </Button>

                    {index === 0 && (
                        <span className={styles.paginationText}>
                            Page {currentPage} of {totalPages}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};