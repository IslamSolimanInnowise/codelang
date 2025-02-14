# codelang

- schema inheritance from login (zod) => done
- code: login form thunk => done
- replace useAppSelector and useAppDispatch by other custom hooks, for example:

```ts
const { getPosts, getPost, loading, posts, currentPost } = usePostsStore();
```

=> Done

- read about: Access token, refresh token and Cookies авторизация
- после успешного login, надо сделать get request по урл /me, чтобы получить информацию о пользователе
