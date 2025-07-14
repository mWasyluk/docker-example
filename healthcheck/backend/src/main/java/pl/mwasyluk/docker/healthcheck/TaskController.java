package pl.mwasyluk.docker.healthcheck;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Task>> getTasksList() {
        return ResponseEntity.ok().body(service.getAll());
    }

    @PutMapping
    public ResponseEntity<Task> putTask(@RequestBody Task task) {
        System.out.println("Received task: " + task);
        return ResponseEntity.ok().body(service.save(task));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTaskById(@PathVariable(required = true) int id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
