function Form({ handleSelect, selections, display }) {
  let displayForm = "";
  if (display === 1) {
    displayForm = <p>Filters!</p>;
    return displayForm;
  } else if (display === 2) {
    displayForm = <p>Search!</p>;
    return displayForm;
  } else {
    displayForm = (
      <form onSubmit={(e) => handleSelect(e)}>
        <select name="title">{selections}</select>
        <button type="Submit">Select</button>
      </form>
    );
    return displayForm;
  }
}

export default Form;
