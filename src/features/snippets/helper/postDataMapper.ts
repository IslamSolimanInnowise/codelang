import { Snippet } from "../snippetsSlice";

const postDataMapper = (data: Snippet[]) => {
  return data.map((snippet) => ({
    id: snippet.id,
    code: snippet.code,
    language: snippet.language,
    creator: snippet.user.username,
    likes: snippet.marks.filter((mark) => mark.type === "like").length,
    dislikes: snippet.marks.filter((mark) => mark.type === "dislike").length,
    comments: snippet.comments.length,
  }));
};

export default postDataMapper;
