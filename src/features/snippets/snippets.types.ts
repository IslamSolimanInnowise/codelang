export interface User {
  id: number;
  username: string;
  role: "user" | "admin";
}

export interface Snippet {
  id: number;
  code: string;
  language: string;
  user: User;
  marks: {
    id: number;
    type: "like" | "dislike";
    user: User;
  }[];
  comments: { id: number; content: string; user: User }[];
}

export interface SnippetsState {
  snippets: Snippet[];
  snippet: Snippet | null;
  isLoading: boolean;
  posts: Post[];
  post: Post | null;
  isCommentModalOpen: boolean;
  isPostModalOpen: boolean;
  totalPages: number;
  currentPage: number;
  mySnippetsTotalPages: number;
  mySnippetsCurrentPage: number;
}

export interface Post {
  id: number;
  code: string;
  language: string;
  creator: string;
  likes: number;
  dislikes: number;
  comments: number;
}

export interface MarkSnippetData {
  id: number;
  mark: "like" | "dislike";
}
