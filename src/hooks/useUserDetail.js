import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAction } from "../stores/screens/user/user.action";
import { setSelectedUser } from "../stores/screens/user/user.reducer";

export default function useUserDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.data || []);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersAction());
    }
  }, [users, dispatch]);

  useEffect(() => {
    if (users.length > 0 && id) {
      const user = users.find((u) => u.id.toString() === id.toString());
      if (user) {
        dispatch(setSelectedUser(user));
      }
    }
  }, [users, id, dispatch]);

  return { selectedUser, status, error };
}
