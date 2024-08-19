import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="compContainer">
        <div>
          <ContactForm />
        </div>
        <div className="searchContainer">
          <SearchBox />
          <ContactList />
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
};
export default App;
