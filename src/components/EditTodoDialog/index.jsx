import React from "react";
import { CustomDialog, TodoFormCreateEdit } from "../../components";

export const EditTodoDialog = ({ open, todo, onClose }) => {
    return (
        <CustomDialog open={open} onClose={onClose} title="Edit Todo">
            <TodoFormCreateEdit todo={todo} onClose={onClose} />
        </CustomDialog>
    );
};
