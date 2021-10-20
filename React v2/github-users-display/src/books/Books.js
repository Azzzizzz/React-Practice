import axios from "axios";
import React, { useState, useEffect } from "react";
import Book from "./Book";
import Error from "../util/Error";
import Loader from "../util/Loader";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const res = await axios.get(
        "https://my-node-api-demo-2.herokuapp.com/api/books"
      );
      console.log(res.data);
      setBooks(res.data.books);
      setLoading(false);
      setError(false);
    } catch (e) {
      console.log("error occured");
      setError(true);
      setBooks([]);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div class="container">
        <h1>Books Component</h1>
        <Loader loading={loading} />
        <Error show={error} />
        <div class="col-8">
          <table className="table table-hover table-bordered ">
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              {books.map((book) => (
                <Book book={book} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* {error ? <Error show={error} /> : (
        { books.map(book => { return <Book book={book} /> })}
      )} */}
    </>
  );
}

//    // ! Class Component
// export default class Books extends Component {
//   state = { books: [] };
//   componentDidMount = async () => {
//     try {
//       const res = await axios.get(
//         "https://my-node-api-demo-2.herokuapp.com/api/books"
//       );
//       // console.log(res.data);
//       this.setState({ books: res.data });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   render() {
//     return (
//       <>
//         <h1>Books</h1>
//         {this.state.books.map((book) => (
//           <Book book={book} />
//         ))}
//       </>
//     );
//   }
// }
