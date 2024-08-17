import { useDispatch } from "react-redux";
import { add } from "redux/operations";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
    const ContactForm = () => {
      return <div>ContactForm</div>;
    };
  }; //
};

export default ContactForm;
