import { Snippet, Post } from "./snippets.types";

export const mapSnippetToPost = (snippet: Snippet): Post => {
  return {
    ...snippet,
    creator: snippet.user.username,
    likes: snippet.marks.filter((mark) => mark.type === "like").length,
    dislikes: snippet.marks.filter((mark) => mark.type === "dislike").length,
    comments: snippet.comments.length,
  };
};

export const mapSnippetsToPosts = (snippets: Snippet[]): Post[] => {
  return snippets.map(mapSnippetToPost);
};
