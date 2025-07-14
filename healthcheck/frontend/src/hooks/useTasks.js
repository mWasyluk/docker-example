import { useState, useEffect } from "react";

const tasksUrl = "/api/tasks";

export function useTasks() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
        return () => {
            setData([]);
            setLoading(false);
            setError(null);
        }
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(tasksUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const tasksArray = await response.json();
            setData(tasksArray);
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const saveTask = async ({ id, title, description }) => {
        const task = { title, description };
        if (id) {
            task.id = id;
        }

        const body = JSON.stringify(task);
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body
        };

        try {
            const response = await fetch(tasksUrl, options);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const task = await response.json();
            if (id) {
                setData(prev => prev.map(t => t.id === id ? task : t));
            } else {
                setData(prev => [...prev, task]);
            }
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const deleteTaskById = async (id) => {
        const taskUrlWithId = tasksUrl + `/${id}`;
        const options = {
            method: 'DELETE',
        };

        try {
            const response = await fetch(taskUrlWithId, options);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            setData(prev => prev.filter(task => task.id !== id));
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    return {
        tasks: data,
        loading,
        error,
        saveTask,
        deleteTaskById,
    };
}
