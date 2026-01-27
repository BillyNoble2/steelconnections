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
      <input name="shear" onChange={handleChange} />
      <br />
      <input name="boltDiameter" onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Calculate</button>
    </>
  );
}
