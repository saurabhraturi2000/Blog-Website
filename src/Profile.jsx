import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import {
  Container,
  Navbar,
  Button,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Items from "./Items";

function Profile() {
  const { currentUser } = useAuthValue();
  const [blog, setBlog] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blog.length / 5);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % blog.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function handle_search(e) {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.mysearch);
    const searchWord = formDataObj.mysearch;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchWord}&apiKey=7079220ed3584304bd88c01e039a80f0`
      )
      .then(function (response) {
        // handle success
        setBlog(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Blog Heaven</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{currentUser?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button onClick={() => signOut(auth)}>Sign Out</Button>
        </Container>
      </Navbar>
      <Container>
        <Form onSubmit={handle_search} className="my-2 d-flex">
          <Form.Control
            type="text"
            placeholder="Type the word"
            name="mysearch"
          />

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <Items currentItems={currentItems} />
        <center>
          <ReactPaginate
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item next "}
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            previousClassName={"item previous"}
            renderOnZeroPageCount={null}
          />
        </center>
      </Container>
    </div>
  );
}

export default Profile;
