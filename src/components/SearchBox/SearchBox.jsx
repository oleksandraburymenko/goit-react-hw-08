import { useDispatch, useSelector } from "react-redux";
import { selectValueFilters } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectValueFilters);

  const handleChange = (event) => dispatch(setFilter(event.target.value))

  return (
    <div className={css.wrapper}>
      <p className={css.search}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        className={css.input}
      ></input>
    </div>
  );
}