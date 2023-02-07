// import { Component, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { connect  } from "react-redux";

import { RootState } from "../store";
import { increase, decrease, toggle } from "../store/counterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter.value);
  const show = useSelector((state: RootState) => state.showCounter);

  const incrementHandler = (amount: number) => {
    dispatch(increase(amount));
  };

  const decrementHandler = (amount: number) => {
    dispatch(decrease(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show.toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => incrementHandler(1)}>Increase 1</button>
        <button onClick={() => decrementHandler(1)}>Decrease 1</button>
        <button onClick={() => decrementHandler(5)}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render(): ReactNode {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increase</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrease</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment),
//     decrement: () => dispatch(decrement),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
