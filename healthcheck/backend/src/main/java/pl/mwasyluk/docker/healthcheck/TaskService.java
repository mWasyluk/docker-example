package pl.mwasyluk.docker.healthcheck;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAll() {
        return repository.findAll();
    }

    public Task save(Task task) {
        return repository.save(task);
    }

    public void deleteById(int id) {
        repository.deleteById(id);
    }
}
