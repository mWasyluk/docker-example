import React, { useState, useEffect } from "react";

export default function TaskForm({
    id,
    title: initialTitle = "",
    description: initialDescription = "",
    saveTask,
    onClose,
}) {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
    }, [initialTitle, initialDescription, id]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTask({ id, title, description });
        onClose();
    };

    return (
        <div style={styles.overlay} onClick={handleOverlayClick}>
            <form
                style={styles.formContainer}
                onSubmit={handleSubmit}
                onClick={e => e.stopPropagation()}
            >
                <button
                    type="button"
                    aria-label="Close"
                    style={styles.closeBtn}
                    onClick={onClose}
                >
                    ×
                </button>
                <h2 style={styles.heading}>
                    {id ? "Edit Task" : "Create Task"}
                </h2>
                <label style={styles.label} htmlFor="task-title">Title</label>
                <input
                    id="task-title"
                    style={styles.input}
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    autoFocus
                />
                <label style={styles.label} htmlFor="task-desc">Description</label>
                <textarea
                    id="task-desc"
                    style={{ ...styles.input, ...styles.textarea }}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type="submit" style={styles.button}>
                    Save
                </button>
            </form>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        background: "#fff",
        borderRadius: "16px",
        padding: "32px 24px 24px 24px",
        minWidth: "340px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    closeBtn: {
        position: "absolute",
        top: "16px",
        right: "16px",
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        color: "#888",
    },
    input: {
        margin: "12px 0",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    label: {
        marginTop: "12px",
        marginBottom: "4px",
        fontWeight: "bold",
    },
    button: {
        marginTop: "24px",
        alignSelf: "center",
        background: "#22304a",
        color: "#eee",
        border: "none",
        borderRadius: "8px",
        padding: "10px 32px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    heading: {
        textAlign: "center",
        marginBottom: "18px",
    },
    textarea: {
        minHeight: "80px",
        resize: "vertical",
    },
};
