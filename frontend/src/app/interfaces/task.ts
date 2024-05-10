export interface Task {
    subscribe(arg0: () => void): Task;
    id?: number;
    description: string;
    status: string; 
}