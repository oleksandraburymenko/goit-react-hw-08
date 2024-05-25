import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
}