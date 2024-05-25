import React from "react";
import "./style.css"

export const Form = () => {
  return (
    <section className="light">
      <div className="container">
        <h2 className="Form-title">Tady bude props s nadpisem pokoje</h2>
        <div className="columns-2">
          <div className="column">
            <img src="" />
            <p className="Form-info">
              Tady taky bude props s popisem pokoje.
              Tady taky bude props s popisem pokoje.
              Tady taky bude props s popisem pokoje.
              Tady taky bude props s popisem pokoje.
              Tady taky bude props s popisem pokoje.
            </p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Field 1:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Field 2:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Select:
              </label>
              <select id="select" className="field-input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Checkbox 1:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
            </div>
            <button className="wide">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
