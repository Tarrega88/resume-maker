const options = ["60 / 40", "70 / 30", "80 / 20", "90 / 10", "100 / 0"];

function PageRatioOptions() {
  return options.map((option, i) => (
    <option className="text-center" key={i} value={i}>
      {option}
    </option>
  ));
}

export default PageRatioOptions;
