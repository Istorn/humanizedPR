import React from 'react';
import NumOfBallsPerBucket from '../utils/calculus';

//Bucket component
class BucketDisplay extends React.Component{

    
    constructor (props){
        super(props);
        this.state = {bucketNumber: props.bucketNumber, numberOfBalls: NumOfBallsPerBucket(props.bucketNumber,this.props.probabilities,this.props.totalNumOfBalls), rowNumber: this.props.rowNumber}
    }
    

    //Handle the click on the bucket in order to proceed new row's generation
    bucketClick = () =>{
        
        this.props.invokeNewGeneration(this.state);
    }

    render(){
        return(
            <div className="column bucket" onClick={this.bucketClick}>
                 {this.state.numberOfBalls}
               <i className="bitbucket icon"></i>
            </div>
        );
    }
}

export default BucketDisplay;