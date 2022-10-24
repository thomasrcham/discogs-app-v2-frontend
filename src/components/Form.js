function Form({ handleSelect, selections }) {
  return (
    <form onSubmit={(e) => handleSelect(e)}>
      <select name="title">{selections}</select>
      <button type="Submit">Select</button>
    </form>
  );
}

export default Form;
