import { inc, dec, rnd } from '../actions'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} class="btn btn-primary">DEC</button>
      <button onClick={() => dispatch(inc())} class="btn btn-primary">INC</button>
      <button onClick={() => dispatch(rnd())} class="btn btn-primary">RND</button>
    </div>
  ) 
}

// const mapStateToProps = (state) => {
//   return (
//     {
//       counter: state.value
//     }
//   )
// }

export default Counter;
