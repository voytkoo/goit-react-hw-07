// src/components/Task/Task.jsx

import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "redux/contactsOps";

export const Task = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContactsThunk(contacts.id));

  return (
    <div>
      <input type="checkbox" checked={contacts.completed} />     {" "}
      <p>{task.text}</p>{" "}
      <button onClick={handleDelete}>
                <MdClose size={24} />     {" "}
      </button>
         {" "}
    </div>
  );
};

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
