interface Answer {
  id: number;
  content: string;
  isCorrect: boolean;
}

interface User {
  id: number;
  username: string;
  role: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  attachedCode: string;
  answers: Answer[];
  user: User;
  isResolved: boolean;
}

export interface QuestionsState {
  questions: Question[];
  question: Question | null;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
}
