import { runFinPlateChecks } from "@/calculations/finPlateChecks";

export default function FinPlateForm({ inputs, setInputs, setResults }) {
  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit() {
    const results = runFinPlateChecks(inputs);
    setResults(results);
  }

  return (
    <>
      <div className="form-row">
      <label>Shear Force:</label>
      <input name="shear" onChange={handleChange} />
      <span>kN</span>
      </div>

      <div className="form-row">
        <label>Bolt Diameter:</label>
        <input name="boltDiameter" onChange={handleChange} />
        <span>mm</span>
      </div>

      <button className="buttons" onClick={handleSubmit}>Calculate</button>

    </>
  );
}
