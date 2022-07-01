import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, edit, api } from "./Action/index";
function App() {
  const [data, setData] = useState("");
  const myState = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // const change = (e) => {
  //   setData(e.target.value);
  // };
  // const addItem = () => {
  //   data.length > 0 ? dispatch(add(data)) : null;
  //   setData("");
  // };
  // const deletion = (a) => {
  //   dispatch(remove(a));
  // };
  // const editable = (a) => {
  //   setData(myState[a]);
  //   dispatch(edit(a));
  //   deletion(a);
  // };
  return (
    <>
      {/* <div>
        <div className="bg-light p-2 d-flex justify-content-center">
          <h1 className="text-secondary">Todo List Using Redux</h1>
        </div>
        <div className="container text-center my-5 form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={change}
            value={data}
          ></textarea>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-secondary my-3"
              onClick={addItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {myState.map((items, index) => {
          return (
            <li key={index}>
              <ol>
                {items}
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-4"
                  onClick={() => deletion(index)}
                >
                  delete
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-4"
                  onClick={() => editable(index)}
                >
                  edit
                </button>
              </ol>
            </li>
          );
        })}
      </div> */}
      <hr />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {myState.map((item,index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => dispatch(api())}>click me</button>
      </div>
    </>
  );
}

export default App;
