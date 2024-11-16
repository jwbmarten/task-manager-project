package com.ToDoing.TaskManager.repository;

import com.ToDoing.TaskManager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
