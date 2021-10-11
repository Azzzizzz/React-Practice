import Counter from "./Counter";
import SpecialCounter from "./SpecialCounter";

function Main() {
  return (
    <div>
      <Counter />
      <SpecialCounter count={2} />

      <SpecialCounter count={100} />
      <SpecialCounter count={10} />
      <SpecialCounter count={134} />
      <SpecialCounter count={133} />
    </div>
  );
}
export default Main;
