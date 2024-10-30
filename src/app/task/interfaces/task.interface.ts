import { TaskStatus } from "./task-status.enum";

export interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
}
