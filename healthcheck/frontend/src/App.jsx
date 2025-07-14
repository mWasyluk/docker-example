import { useState } from 'react'
import TaskView from './components/TaskView';
import { useTasks } from './hooks/useTasks';
import TaskForm from './components/TaskForm';

export default function App() {
    const { tasks, loading, error, saveTask, deleteTaskById } = useTasks(true);
    const [showForm, setShowForm] = useState(false);

    const editTask = ({ id, title, description }) => {
        setShowForm({
            id,
            title,
            description
        });
    }

    return (
        <div style={styles.container}>
            <span style={styles.title}>Task List</span>
            <button
                onClick={() => setShowForm(!showForm)}
                style={styles.button}
            >
                {"Create Task"}
            </button>

            <div style={styles.taskList}>
                {loading ? <p style={styles.center}>Loading...</p>
                    : error ? <p style={styles.error}>Error: {error}</p>
                        : (!tasks || tasks.length === 0) ? <p style={styles.center}>No tasks found</p>
                            : tasks.map(task => (
                                <TaskView {...task} key={task.id} editTask={editTask} deleteTask={deleteTaskById} />
                            ))
                }
            </div>

            {showForm && (
                <div style={styles.formContainer}>
                    <TaskForm {...showForm} saveTask={saveTask} onClose={() => setShowForm(false)} />
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 500,
        height: '100vh',
        minHeight: '100vh',
        margin: 'auto auto',
        padding: 20,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 16,
        fontFamily: 'system-ui, sans-serif',
        background: '#f5f6fa',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    },
    title: {
        fontSize: '2rem',
        color: '#22304a',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textAlign: 'center',
    },
    center: {
        textAlign: 'center'
    },
    button: {
        alignSelf: "center",
        background: "#22304a",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "10px 32px",
        fontSize: "1rem",
        cursor: "pointer",
    },
    taskList: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 8,
        marginBottom: 8,
    },
    formContainer: {
        marginTop: 24
    }
};
