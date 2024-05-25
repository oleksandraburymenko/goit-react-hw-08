import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}