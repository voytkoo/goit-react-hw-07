import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "../../redux/contactsOps"; // Впевніться, що шлях правильний
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p className={s.name}>
          <span className={s.icon}>
            <FaUser size={16} />
          </span>
          {name}
        </p>
        <p className={s.phone}>
          <span className={s.icon}>
            <FaPhone size={16} />
          </span>
          {number}
        </p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
