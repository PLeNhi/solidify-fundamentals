import type { Task, Priority, Status } from "./types.ts";

class TaskManager {
    private tasks: Task[] = [];

    addTask(taskData: Omit<Task, 'id'>): Task {
        const newTask: Task = {
            ...taskData,
            id: 't-' + Date.now()
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(id: string, updates: Partial<Task>): Task | null {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
            return this.tasks[taskIndex];
        }
        return null;
    }

    deleteTask(id: string): boolean {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }

    getTasks(filter?: { status?: Status; priority?: Priority; tag?: string }): Task[] {
        let filteredTasks = this.tasks;
        if (filter) {
            if (filter.status) {
                filteredTasks = filteredTasks.filter(task => task.status === filter.status);
            }
            if (filter.priority) {
                filteredTasks = filteredTasks.filter(task => task.priority === filter.priority);
            }
            if (filter.tag) {
                filteredTasks = filteredTasks.filter(task => task.tags.includes(filter.tag ||''));
            }
        }
        return filteredTasks;
    }

}

// ==================== TEST ====================
const manager = new TaskManager();

const task1 = manager.addTask({
    title: "Học TypeScript nâng cao",
    priority: "high",
    status: "todo",
    tags: ["study"]
});

const task2 = manager.addTask({
    title: "Làm bài tập TypeScript",
    priority: "medium",
    status: "in-progress",
    tags: ["study"]
});

console.log(task1);
console.log(task2);
console.log(manager.getTasks({ status: "todo" }));
manager.updateTask(task1.id, { status: "in-progress" });
console.log(manager.getTasks({ status: "in-progress" }));
manager.deleteTask(task2.id);
console.log(manager.getTasks());