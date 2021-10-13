import Callback from "./Callback";
import Counter from "./Counter";
import SpecialCounter from "./SpecialCounter";

function Main() {
  function notify() {
    console.log("in main component");
  }
  return (
    <div>
      {/* <Counter />
      <SpecialCounter count={2} />
      <Callback onNotify={notify} /> */}
    </div>
  );
}
export default Main;
