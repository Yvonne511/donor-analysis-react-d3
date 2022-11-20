import * as d3 from "d3";
import data_combined from './data_combined.csv';
import React from "react";
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import * as vl from 'vega-lite-api';
import * as vegaTooltip from 'vega-tooltip';

const Home = () => {
  const dark = '#3e3c38';
const config = {
  axis: {
    domain: false,
    tickColor: 'lightGray'
  },
  style: {
    "guide-label": { fontSize: 20, fill: dark},
    "guide-title": { fontSize: 30, fill: dark},}
};

const getData = async () => {
  const data = await d3.csv(data_combined);
  return data;
};
const viz = vl.markCircle({ size: 50, opacity: 0.5 })
  .encode(
  vl.x().fieldT('eventdate').scale({ zero: false }).title('Date'),
  vl.y().fieldN('contactid').scale({ zero: false }).title("Each Person's Trail").axis({labels:false}),
  vl.color().fieldN('eventtype').title('Event Type'),
  );
  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call)}
  });
  const run = async () => {
    const marks = viz
    .data(await getData())
    .width(900)
    .height(600)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config);
    
    document.getElementById('vis').appendChild(await marks.render());
  };
  run();

  return (
    <>
    <div>
      <h1>Home</h1>
      <div id="vis"></div>
    </div>
    </>
  );
  };
  
  export default Home;
