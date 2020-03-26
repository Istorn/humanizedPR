import React from 'react';
import BucketDisplay from './BucketDisplay';


class RowBucketDisplay extends React.Component{

    state= {rowNumber: 0,probabilities: 0};
    constructor(props){
        super(props);
        this.state={rowNumber: this.props.rowNumber,probabilities: this.props.probabilities};
    }

    //New row's generation invoked
    invokeNewGeneration = (bucketClicked) => {
        
        this.props.generateRowAfter(bucketClicked);
    }
    render(){
        const bucketsJSX = [];
        for (let i=0;i<10;i++){
                bucketsJSX.push(<BucketDisplay bucketNumber={i} probabilities = {this.state.probabilities} rowNumber={this.state.rowNumber} totalNumOfBalls={this.props.totalNumOfBalls} invokeNewGeneration={this.invokeNewGeneration}/>);
        }
        
        return (
            <div className="ui ten column grid" style={{margin: '1%'}}>
                <div className="row">
                  {bucketsJSX}
                </div>
            </div>

        );
        
    }
}

export default RowBucketDisplay;