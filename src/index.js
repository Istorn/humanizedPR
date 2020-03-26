import React from 'react';
import ReactDOM from 'react-dom';

import RowBucketDisplay from './components/RowBucketDisplay';



//Main component to render the entire application

class App extends React.Component {
    

    constructor(props){
        super(props);
        //Initialize the state with the first bucket row
        this.state={rows:[<RowBucketDisplay probabilities="0.5" rowNumber="0" generateRowAfter={this.generateRowAfter}/>]};
        
        

    }

    //Methods to create new row
    generateRowAfter = (bucketClicked) => {
            const probabilities=0
            const newRow=<RowBucketDisplay probabilities="0.9" rowNumber={this.state.rows.length} totalNumOfBalls={bucketClicked.numberOfBalls} generateRowAfter={this.generateRowAfter}/>;
            
            
            
            
            this.setState(state => state.rows = state.rows.concat(newRow));
            
    }

    


    

    render(){
        console.log(this.state.rows);
        return (<div>{this.state.rows}</div>);
    } 
}

ReactDOM.render(<App/>,document.querySelector('#root'));