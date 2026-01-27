  export default function Results({ results }) {
    return (
      <div>
        <h2>Results</h2>
  
        <p>
          Bolt shear utilisation:{" "}
          {results.boltShearUtilisation.toFixed(2)}
        </p>
  
        <p>
          Status:{" "}
          <strong>
            {results.passes ? "PASS" : "FAIL"}
          </strong>
        </p>
      </div>
    );
  }
  