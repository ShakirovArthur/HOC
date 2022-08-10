export default function Universe({ color, size }) {
  return (
    <div className="Universe" style={{ borderColor: color, fontSize: size }}>
      <h1>Hello Universe</h1>
    </div>
  );
}
