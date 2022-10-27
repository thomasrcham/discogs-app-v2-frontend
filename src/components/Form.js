function Form({ display, handleSelect, selections }) {
  let displayForm = "";
  //   if (display === 1) {
  //     displayForm = <p>Filters!</p>;
  //     return displayForm;
  //   } else if (display === 2) {
  //     displayForm = <p>Search!</p>;
  //     return displayForm;
  //   } else {
  displayForm = (
    <>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <form onSubmit={(e) => handleSelect(e)}>
          <select name="title">{selections}</select>
          <button type="Submit">Select</button>
        </form>
      </div>
    </>
  );
  //   }
  return displayForm;
}

export default Form;
