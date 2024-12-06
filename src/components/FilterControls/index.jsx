import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPagination } from "../../store/todoSlice";
import { InputSelect } from "../ui";
import styles from "./styles.module.css";

export const FilterControls = () => {
    const dispatch = useDispatch();
    const { sortByDate, completionStatus } = useSelector((state) => state.todos.filters);
    const { itemsPerPage } = useSelector((state) => state.todos.pagination);
    const isHasCompleted = useSelector((state) => state.todos.isHasCompleted);

    const handleSortChange = (e) => {
        dispatch(setFilters({ sortByDate: e.target.value }));
    };

    const handleFilterChange = (e) => {
        dispatch(setFilters({ completionStatus: e.target.value }));
    };

    const handleItemsPerPageChange = (e) => {
        dispatch(setPagination({ itemsPerPage: e.target.value, page: 1 }));
    };

    const filterFields = [
        {
            label: "Sort by Date",
            value: sortByDate || "asc",
            onChange: handleSortChange,
            options: [
                { label: "Ascending", value: "asc" },
                { label: "Descending", value: "desc" },
            ],
        },
        {
            label: "Completion Status",
            value: completionStatus || "all",
            onChange: handleFilterChange,
            options: [
                { label: "All", value: "all" },
                { label: "Completed", value: "completed" },
                { label: "Not Completed", value: "notCompleted" },

            ].filter(item => (isHasCompleted ? item : item.value !== "completed")),
        },
        {
            label: "Items per Page",
            value: itemsPerPage || 5,
            onChange: handleItemsPerPageChange,
            options: [
                { label: "5", value: 5 },
                { label: "10", value: 10 },
            ],
        },
    ];

    return (
        <div className={styles.filterControlsContainer}>
            {filterFields.map((field, index) => (
                <InputSelect
                    key={index}
                    label={field.label}
                    value={field.value}
                    onChange={field.onChange}
                    options={field.options}
                />
            ))}
        </div>
    );
};
