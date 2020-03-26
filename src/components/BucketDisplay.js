import React from 'react';
import Calculus from '../utils/calculus';

//Bucket component
class BucketDisplay extends React.Component{

    
    constructor (props){
        super(props);

        //Initialize the state with number of the bucket, number of ball inside of the bucket and number of the bucket's row 
        this.state = {bucketNumber: props.bucketNumber, numberOfBalls: Calculus.NumOfBallsPerBucket(props.bucketNumber,this.props.probabilities,this.props.totalNumOfBalls), rowNumber: this.props.rowNumber}
    }
    

    //Handle the click on the bucket in order to proceed new row's generation
    bucketClick = () =>{
        
        this.props.invokeNewGeneration(this.state);
    }

    render(){
        return(
            <div className="column bucket" onClick={this.bucketClick} >
                 {this.state.numberOfBalls} Balls
                
            </div>
        );
    }
}

export default BucketDisplay;