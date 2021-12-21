import { useLayout, useElement, useEffect } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import { useSelections } from "@nebula.js/stardust";

import Plotly from 'plotly.js-dist'

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const layout = useLayout();
      console.log(layout);
      //getting data array from QS object layout
      useEffect(() => {
        var qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;
        console.log(qMatrix);

        //array to get measure labels
        var measureLabels = layout.qHyperCube.qMeasureInfo.map(function (d) {
          return d.qFallbackTitle;
        });

        //an array that invokes each row of qMatrix from layout:
        var data = qMatrix.map(function (d) {
          return {
            0: d[0].qText,
            1: d[1].qText,
            2: d[2].qText,
            3: d[3].qText,
            4: d[4].qText,
            5: d[5].qText,
            6: d[6].qText,
            7: d[7].qText,
            8: d[8].qText,
            9: d[9].qText,
            10: d[10].qText,
            11: d[11].qText,
            12: d[12].qText,
            13: d[13].qText,
            14: d[14].qText,
            15: d[15].qText,
            16: d[16].qText,
            17: d[17].qText,
            18: d[18].qText,
            19: d[19].qText,
            20: d[20].qText,
            21: d[21].qText,
            22: d[22].qText,
            23: d[23].qText
          };
        });

        var width = 1000;
        var height = 400;

        var id = "container_" + layout.qInfo.qId;
        console.log(id);

        // if not created, use id and size to create
        const elem_new = `<div id=${id}></div>`;
        element.innerHTML = elem_new;

        viz(data, width, height, id);
      }, [element, layout]);


      //Function to use D3.js and build the Scatter-Pie plot:

      function viz(data, width, height, id) {

var layout = {
  title: 'Mt Bruno Elevation',
  autosize: false,
  width: 800,
  height: 500,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};

function unpack(data, key) {
  return data.map(function(data) {
    return data[key];
  });
}

var z_data=[ ]
for(var i=0;i<24;i++)
{
  z_data.push(unpack(data,i));
}



var data = [{
  z:z_data,
  type: 'surface'
}];


Plotly.newPlot(id, data, layout);






      }
    },
  };
}
