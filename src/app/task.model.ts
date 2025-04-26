export interface Task {
  id?: number | null | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  status?: 'Pending' | 'Done';
}