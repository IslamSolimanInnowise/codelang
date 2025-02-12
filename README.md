# codelang

- schema inheritance from login (zod) => done
- code: login form thunk
- replace useAppSelector and useAppDispatch by other custom hooks, for example:

```ts
const { getPosts, getPost, loading, posts, currentPost } = usePostsStore();
```
