import React from 'react';
import ReactDOM from 'react-dom';

import RowBucketDisplay from './components/RowBucketDisplay';
import HistogramDisplay from './components/HistogramDisplay';

import Calculus from './utils/calculus';

//Main component to render the entire application

class App extends React.Component {
    

    constructor(props){
        super(props);
        /*Initialize the state with the first bucket row
            it has hard coded probabilities and row number as default
        */
       let bucketValues= [];
                for (let i=0;i<10;i++){
                    bucketValues.push(Calculus.NumOfBallsPerBucket(i,0.5,10000));
                }
        this.state={rows:[<RowBucketDisplay probabilities="0.5" rowNumber="0" generateRowAfter={this.generateRowAfter}/>], histogram: bucketValues};
        
        

    }

    //Methods to create new row
    generateRowAfter = (bucketClicked) => {

            //Obtain the probabilities index by the number of bucket
            const probabilities=Calculus.probabilitiesByBucketNumber(bucketClicked.bucketNumber);

            //Row number and total number of balls are given by the bucket previously clicked in order to generate the new line

            const newRow=<RowBucketDisplay probabilities={probabilities} rowNumber={this.state.rows.length} totalNumOfBalls={bucketClicked.numberOfBalls} generateRowAfter={this.generateRowAfter}/>;


                //Obtain number of balls in each bucket
                let bucketValues= [];
                for (let i=0;i<10;i++){
                    bucketValues.push(Calculus.NumOfBallsPerBucket(i,probabilities,bucketClicked.numberOfBalls));
                }

                
            //Update the state with the new row and new histogram values            
            this.setState((state) => ({rows: state.rows.concat(newRow), histogram: bucketValues})
                );
    }


    componentWillUpdate(){
        return (
            <div>
                <HistogramDisplay values={this.state.histogram} />
                {this.state.rows}
            </div>
            
            );
    }
    //Render the buckets's rows and histogram

    render(){
        console.log(this.state.histogram);
        return (
            <div>
                <HistogramDisplay values={this.state.histogram} />
                {this.state.rows}
            </div>
            
            );
    } 
}

ReactDOM.render(<App/>,document.querySelector('#root'));