import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Button } from "../ui";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../../store/todoSlice";
import { DeleteTodoDialog } from "../DeleteTodoDialog";
import styles from './styles.module.css';

export const TodoItem = ({ todo, onEdit }) => {
    const dispatch = useDispatch();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleCheckboxChange = () => {
        dispatch(toggleComplete({ id: todo.id }));
    };

    const handleDeleteClick = () => {
        setOpenDeleteDialog(true);
    };

    const handleDeleteConfirm = (id) => {
        dispatch(removeTodo(id));
    };

    const buttonActions = [
        {
            label: "Edit",
            onClick: onEdit,
            variant: "outlined",
            color: "primary"
        },
        {
            label: "Delete",
            onClick: handleDeleteClick,
            variant: "outlined",
            color: "secondary"
        }
    ];

    return (
        <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={todo.completed}
                            onChange={handleCheckboxChange}
                            color="primary"
                        />
                    }
                    label={todo.title}
                />
                <div>{todo.description}</div>
                <em className={styles.date}>{new Date(todo.createdAt).toLocaleString()}</em>
            </div>
            <div className={styles.buttons}>
                {buttonActions.map((action, index) => (
                    <Button
                        key={index}
                        onClick={action.onClick}
                        variant={action.variant}
                        color={action.color}
                        size="small"
                    >
                        {action.label}
                    </Button>
                ))}
            </div>

            <DeleteTodoDialog
                open={openDeleteDialog}
                todo={todo}
                onClose={() => setOpenDeleteDialog(false)}
                onDelete={handleDeleteConfirm}
            />
        </div>
    );
};