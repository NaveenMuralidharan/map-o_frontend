import { Link, useLoaderData, Form } from "react-router-dom";
import React, {Component} from "react";
import mermaid from "mermaid";

// const config = {
//     theme: 'default',
//     logLevel: 'fatal',
//     securityLevel: 'strict',
//     startOnLoad: true,
//     arrowMarkerAbsolute: false,
  
//     er: {
//       diagramPadding: 20,
//       layoutDirection: 'TB',
//       minEntityWidth: 100,
//       minEntityHeight: 75,
//       entityPadding: 15,
//       stroke: 'gray',
//       fill: 'honeydew',
//       fontSize: 12,
//       useMaxWidth: true,
//     },
//     flowchart: {
//       diagramPadding: 8,
//       htmlLabels: true,
//       curve: 'basis',
//     },
//     sequence: {
//       diagramMarginX: 50,
//       diagramMarginY: 10,
//       actorMargin: 50,
//       width: 150,
//       height: 65,
//       boxMargin: 10,
//       boxTextMargin: 5,
//       noteMargin: 10,
//       messageMargin: 35,
//       messageAlign: 'center',
//       mirrorActors: true,
//       bottomMarginAdj: 1,
//       useMaxWidth: true,
//       rightAngles: false,
//       showSequenceNumbers: false,
//     },
//     gantt: {
//       titleTopMargin: 25,
//       barHeight: 20,
//       barGap: 4,
//       topPadding: 50,
//       leftPadding: 75,
//       gridLineStartPadding: 35,
//       fontSize: 11,
//       fontFamily: '"Open Sans", sans-serif',
//       numberSectionStyles: 4,
//       axisFormat: '%Y-%m-%d',
//       topAxis: false,
//     },
//   };
//   mermaid.initialize(config);
  

//   mermaid.initialize({
//     startOnLoad: true,
//     theme: "default",
//     securityLevel: "loose" 
// })

export default class Map extends Component{

    constructor(props){
      console.log("Hi from map)")
      super(props);
      this.state={ chart: `sequenceDiagram
      //   box Materials Planning
      //   participant Chemist
      //   end
      //   activate Chemist
      //   Note over Chemist: Chemist - Plan for materials required in developmentDoc: 
      //   Chemist->>Chemist:Channel: External Vendor  Tool: Vendor order management
      //   box Experiment design
      //   participant Associate Scientist
      //   end
      //   activate Associate Scientist
      //   Note over Associate Scientist: Associate Scientist - Plan Experiment for developmentDoc: undefined
      //   Associate Scientist->>Associate Scientist:Channel: Internal Server Tool: Design of Experiment Software`};
    }

    componentDidMount(){
      mermaid.initialize({startOnLoad: true});

    //   const chart = `
    //   sequenceDiagram
    //   box Materials Planning
    //   participant Chemist
    //   end
    //   activate Chemist
    //   Note over Chemist: Chemist - Plan for materials required in developmentDoc: 
    //   Chemist->>Chemist:Channel: External Vendor  Tool: Vendor order management
    //   box Experiment design
    //   participant Associate Scientist
    //   end
    //   activate Associate Scientist
    //   Note over Associate Scientist: Associate Scientist - Plan Experiment for developmentDoc: undefined
    //   Associate Scientist->>Associate Scientist:Channel: Internal Server Tool: Design of Experiment Software
    // `;
      // this.setState({chart});

    }



    render(){

        // return <div className="mermaid" id="mermaid-chart">{this.props.chart}</div>
        return (
          <div
          className="mermaid"
          dangerouslySetInnerHTML={{ __html: this.state.chart }}
          style={{ overflow: 'auto', width: '100%', height: '100%' }}
          />
        )

    
      }
    

}

