import "./styles.css";
let v;
export default function App() {
  function oc() {
    v = event.target.value;
    console.log(event.target.value);
  }

  function r() {
    console.log(v);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="radio"
        id="html"
        name="fav_language"
        value="HTML"
        onChange={oc}
      />
      <br />
      <br />
      <input
        type="radio"
        id="html"
        name="fav_language"
        value="css"
        onChange={oc}
      />
      <br />
      <br />
      <input
        type="radio"
        id="html"
        name="fav_language"
        value="javascript"
        onChange={oc}
      />
      <br />
      <br />
      <button onClick={r}>submit</button>
    </div>
  );
}
