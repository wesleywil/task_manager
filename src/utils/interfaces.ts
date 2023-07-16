export interface Project{
    id:number,
    name:string,
    description?:string,
    status:Project_Status,
    priority:Priority,
    start_date?:Date,
    due_date:Date,
    favorite:boolean,
    tasks?:Task[]
}

export interface Task{
    id:number;
    title:string;
    description?:string;
    status:Task_Status,
    priority:Priority,
    due_date:Date,
}
enum Priority {
    HIGH,
    MEDIUM,
    LOW
  }

enum Project_Status{
    IN_PROGRESS,
    COMPLETED,
    PENDING
}

enum Task_Status {
    TO_DO,
    IN_PROGRESS,
    COMPLETED,
    BLOCKED
  }

