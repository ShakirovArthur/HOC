import "./styles.css";

export default function Hello({ color, size }) {
  return (
    <div className="Hello" style={{ borderColor: color, fontSize: size }}>
      <h1>Hello world</h1>
    </div>
  );
}
