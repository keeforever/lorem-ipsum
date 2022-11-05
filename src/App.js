import data from "./data";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(0);
  const [text, setText] = useState(data);
  const [numValue, setnumValue] = useState(0);

  const inputHandler = (e) => {
    setnumValue(e.target.value);
  };

  const generatePara = (e) => {
    e.preventDefault();
    setSelection(numValue);
  };

  return (
    <main>
      <section className="container">
        <header className="head">
          <h1>TIRED OF BORING LOREM IPSUM?</h1>
        </header>

        <section className="inputs-container">
          <h2>Paragraph:</h2>

          <form onSubmit={generatePara} className="form-control">
            <input
              type="number"
              min={0}
              value={numValue}
              onChange={inputHandler}
            />
            <button type="submit">
              <span>Generate</span>
            </button>
          </form>
        </section>
        <section className="paragraph-container">
          {text.map((para, index) =>
            index < parseInt(selection) ? (
              <p key={index} className="paragraph">
                {para}
              </p>
            ) : (
              ""
            )
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
