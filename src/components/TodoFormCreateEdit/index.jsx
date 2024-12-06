import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "../../components";

export const TodoFormCreateEdit = ({ todo = null, onClose }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(todo?.title || "");
    const [description, setDescription] = useState(todo?.description || "");

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        }
    }, [todo]);

    const handleSave = () => {
        const isEditMode = !!todo;
        if (isEditMode) {
            dispatch(updateTodo({ ...todo, title, description }));
        } else {
            const newTodo = {
                id: uuidv4(),
                title,
                description,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            dispatch(addTodo(newTodo));
            setTitle("");
            setDescription("");
        }
        if (onClose) onClose();
    };

    const handleTitleChange = (value) => setTitle(value);
    const handleDescriptionChange = (value) => setDescription(value);

    return (
        <TodoForm
            title={title}
            description={description}
            onTitleChange={handleTitleChange}
            onDescriptionChange={handleDescriptionChange}
            onSave={handleSave}
        />
    );
};
