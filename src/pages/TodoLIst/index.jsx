import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoForm, TodoItem, EditTodoDialog, FilterControls, Pagination } from "../../components";
import {addTodo, updateTodo, setPagination, checkIsHasCompletedToDo} from "../../store/todoSlice";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";

export const TodoList = () => {
    const dispatch = useDispatch();
    const {todos,pagination,filters} = useSelector((state) => state.todos);
    const { page, itemsPerPage } = pagination;
    const { sortByDate, completionStatus } = filters;

    useEffect(() => {
        dispatch(checkIsHasCompletedToDo());
    }, [todos]);

    const sortedTodos = [...todos].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        if (sortByDate === "asc") {
            return dateA - dateB;
        } else {
            return dateB - dateA;
        }
    });

    const filteredTodos = sortedTodos.filter((todo) => {
        if (completionStatus === "all") return true;
        if (completionStatus === "completed") return todo.completed;
        if (completionStatus === "notCompleted") return !todo.completed;
        return true;
    });

    const totalTodos = filteredTodos.length;
    const totalPages = Math.ceil(totalTodos / itemsPerPage);
    const currentTodos = filteredTodos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const [editTodo, setEditTodo] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const handleNewTodoSave = () => {
        const newTodo = {
            id: uuidv4(),
            title: newTitle,
            description: newDescription,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        dispatch(addTodo(newTodo));
        setNewTitle("");
        setNewDescription("");
    };

    const handleEditOpen = (todo) => {
        setEditTodo(todo);
        setOpenEditDialog(true);
    };

    const handleEditClose = () => {
        setOpenEditDialog(false);
        setEditTodo(null);
    };

    const handleEditSave = (updatedTodo) => {
        dispatch(updateTodo(updatedTodo));
        handleEditClose();
    };

    const handlePageChange = (newPage) => {
        dispatch(setPagination({ page: newPage, itemsPerPage }));
    };

    return (
        <div className={styles.todoListContainer}>
            <h2>Add New Todo</h2>
            <TodoForm
                title={newTitle}
                description={newDescription}
                onTitleChange={setNewTitle}
                onDescriptionChange={setNewDescription}
                onSave={handleNewTodoSave}
                buttonLabel="Add"
            />
            {totalTodos > 0 && (
                <FilterControls />
            )}
            <ul className={styles.todoList}>
                {currentTodos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} onEdit={() => handleEditOpen(todo)} />
                    </li>
                ))}
            </ul>
            {totalTodos > 0 && (
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
            {editTodo && (
                <EditTodoDialog
                    open={openEditDialog}
                    todo={editTodo}
                    onClose={handleEditClose}
                    onSave={(updatedTodo) =>
                        handleEditSave({ ...editTodo, ...updatedTodo })
                    }
                />
            )}
        </div>
    );
};