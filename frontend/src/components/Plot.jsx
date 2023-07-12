import "./Plot.css";
import {
  XYPlot,
  MarkSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

function Plot({ flowers }) {
  const data = [];
  for (var i = 0; i < flowers.length; i++) {
    data.push({ x: flowers[i].id, y: flowers[i].price });
    console.log(data);
  }
  return (
    <div>
      <h3>Total amount of products: {flowers.length}</h3>

      <div style={{ margin: "20px" }}>
        <br />
        <br />
        <h2>Flower prices:</h2>
        <XYPlot height={400} width={600}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={data} color="red" />
        </XYPlot>
      </div>
    </div>
  );
}

export default Plot;
