import styles from "./App.module.css";
import NavBar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';
import {Container} from "react-bootstrap";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import './api/axiosDefaults'
import BookCreateForms from "./pages/books/BookCreateForms";
import BookPage from "./pages/books/BookPage";
import Books from "./components/Books";
import BookEditForm from "./pages/books/BoookEditForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <Books />} />
          <Route exact path="/mybooks" render={() => <h1>My Books</h1>} />
          <Route exact path="/signin" render={() => <SignInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          <Route exact path="/books/create" render={() => <BookCreateForms /> } />
          <Route exact path="/books/:id/edit" render={() => <BookEditForm /> } />
          <Route exact path="/books/:id" render={() => <BookPage /> } />
          <Route render={()=><p>404 Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;