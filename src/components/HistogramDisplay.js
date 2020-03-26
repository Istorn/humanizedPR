import React from 'react';
import Histogram from 'react-chart-histogram';

class  HistogramDisplay extends React.Component{

    constructor(props){
        super(props);
        
        
    }

    
    
  render () {
      console.log(this.props.values);
    const labels = ['1', '2', '3','4','5','6','7','8','9','10'];
  
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
    return (
      <div className="ui raised container segment">
        <Histogram
            xLabels={labels}
            yValues={this.props.values}
            width='900px'
            height='200px'
            options={options}
        />
      </div>
    )
  }
}

export default HistogramDisplay;