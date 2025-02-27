import { setUsersPage } from "@features/users/users.slice";
import { getAllUsers, getUser } from "@features/users/users.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useUsers = () => {
  const usersStore = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const getUsers = useCallback(
    (...data: Parameters<typeof getAllUsers>) => {
      return dispatch(getAllUsers(...data));
    },
    [dispatch]
  );

  const getOneUser = useCallback(
    (...data: Parameters<typeof getUser>) => dispatch(getUser(...data)),
    [dispatch]
  );

  const changePage = useCallback(
    (...data: Parameters<typeof setUsersPage>) => {
      dispatch(setUsersPage(...data));
    },
    [dispatch]
  );

  return { ...usersStore, getUsers, getOneUser, changePage };
};

export default useUsers;
