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
                filteredTasks =  filteredTasks.filter(task => filter.tag &&  task.tags.includes(filter.tag));
            }
        }
        return filteredTasks;
    }

    searchTasks(query: string): Task[] {
        return this.tasks.filter(task => 
            task.title.toLowerCase().includes(query.toLowerCase()) || 
            (task.description && task.description.toLowerCase().includes(query.toLowerCase()))
        );
    }

    getOverdueTasks(): Task[] {
        const now = new Date();
        return this.tasks.filter(task => task.dueDate && task.dueDate < now && task.status !== 'done');

    }
    markAsDone(id: string): Task | null {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = 'done';
            return task;
        }
        return null;
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
manager.addTask({
    title: "Đi dạo",
    priority: "low",
    status: "in-progress",
    dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    tags: ["leisure"]
});

console.log("task1:", task1);
console.log("task2:", task2);
console.log("Tasks with status 'todo':", manager.getTasks({ status: "todo" }));
manager.updateTask(task1.id, { status: "in-progress" });
console.log("Tasks with status 'in-progress':", manager.getTasks({ status: "in-progress" }));
manager.deleteTask(task2.id);
console.log("Remaining tasks:", manager.getTasks());
console.log("Search for 'TypeScript':", manager.searchTasks("TypeScript"));
console.log("Overdue tasks:", manager.getOverdueTasks());
console.log("Mark task1 as done:", manager.markAsDone(task1.id));