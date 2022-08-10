import "./styles.css";
import Hello from "./Hello";
import Universe from "./HelloUniverse";

const withBorder = (BaseComponent, color) => {
  return (props) => {
    return <BaseComponent {...props} color={color} />;
  };
};

const BorderGreen = withBorder(Hello, "green");
const BorderRed = withBorder(Universe, "red");

export default function App() {
  return (
    <div className="App">
      <BorderGreen size={"20px"} />
      <BorderRed size={"12px"} />
    </div>
  );
}
