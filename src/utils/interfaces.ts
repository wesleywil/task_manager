export interface Project{
    id:number,
    name:string,
    description?:string,
    status:Project_Status,
    priority:Priority,
    start_date?:Date,
    due_date:Date,
    favorite:boolean,
    tasks:Task[]
}

export interface Task{
    id:number;
    title:string;
    description?:string;
    status:Task_Status,
    priority:Priority,
    due_date:Date,
    projectId:number;
}
export enum Priority {
    HIGH,
    MEDIUM,
    LOW
  }

export enum Project_Status{
    IN_PROGRESS,
    COMPLETED,
    PENDING
}

export enum Task_Status {
    TO_DO = "TO_DO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    BLOCKED = "BLOCKED"
  }

