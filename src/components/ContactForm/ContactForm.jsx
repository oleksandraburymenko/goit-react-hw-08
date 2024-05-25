import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSabmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSabmit}>
      <label htmlFor="contactName" className={css.label}>
        Name
        <input
          type="text"
          name="name"
          className={css.input}
          id="contactName"
          required
        />
      </label>
      <label htmlFor="contactNumber" className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          className={css.input}
          id="contactNumber"
          required
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}