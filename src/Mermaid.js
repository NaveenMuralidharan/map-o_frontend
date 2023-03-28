import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose" 
})


console.log({mermaid})

export default class Mermaid extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       chart: props.chart
    //     };
    //   }
    
    componentDidMount(){
        
        mermaid.contentLoaded();
        console.log({mermaid})

    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.chart !== this.props.chart) {
    //       document
    //         .getElementById("mermaid-chart")
    //         .removeAttribute("data-processed");
    //       mermaid.contentLoaded();
    //     }
    //   }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.chart !== this.props.chart) {
    //       document
    //         .getElementById("mermaid-chart")
    //         .removeAttribute("data-processed");
    //       mermaid.contentLoaded();
    //       console.log("COmponent updated")
    //     }
    //   }
    

    render(){

        return <div className="mermaid" id="mermaid-chart">{this.props.chart}</div>
    }
}