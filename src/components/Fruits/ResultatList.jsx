import PropTypes from "prop-types";
export default function ResultatList({ results }) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((item, index) => (
          <div key={index}>
            <li>nom :{item.nom}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

// ResultatList.propTypes = {
//   results: PropTypes.arrayOf(
//     PropTypes.shape({ nom: PropTypes.string, type: PropTypes.string })
//       .isRequired
//   ),
// };

// ResultatList.defaultProps = {
//   results: [{ nom: "alpha", type: "legume" }],
// };
