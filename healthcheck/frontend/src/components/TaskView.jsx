export default function TaskView({ id, title, description, editTask, deleteTask }) {

    return (
        <div
            style={{
                ...styles.container
            }}
        >
            <div style={styles.title}>{title}</div>
            <div style={styles.description}>{description}</div>
            <div style={styles.actions}>
                <button
                    style={{
                        ...styles.btn,
                        ...styles.editBtn
                    }}
                    title="Edit"
                    onClick={() => editTask({ id, title, description })}
                >
                    Edit
                </button>
                <button
                    style={{
                        ...styles.btn,
                        ...styles.deleteBtn,
                    }}
                    title="Delete"
                    onClick={() => deleteTask(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "400px",
        background: "#22304a",
        borderRadius: "16px",
        padding: "20px",
        paddingBottom: "50px",
        color: "#fff",
        position: "relative",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "8px",
        wordBreak: "break-word",
    },
    description: {
        fontSize: "1.1rem",
        color: "#dbeafe",
        wordBreak: "break-word",
    },
    actions: {
        position: "absolute",
        right: "16px",
        bottom: "16px",
        display: "flex",
        gap: "12px",
    },
    btn: {
        border: "none",
        borderRadius: "8px",
        padding: "4px 8px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
    },
    editBtn: {
        background: "#e5e7eb",
        color: "#22304a",
    },
    deleteBtn: {
        background: "#ffe4e6",
        color: "#be123c",
    },
};
