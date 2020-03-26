//Help module for math calculations

/*Array containing binomial calculus per each of 10 buckets

Due to the nature of the board, we have fixed numbers by the given equation:

(n k )  = n! / k! (n-k)!
*/
const binomialIndexes=[1,9,36,84,126,126,84,36,9,1];

//Help function to calculate number of balls by the given bucket, probability index and number of balls
const NumOfBallsPerBucket = (bucketNumber,probabilitiesIndex = 0.5,numberOfBalls = 10000) => {

    //p^k
    const pTok = Math.pow(probabilitiesIndex,bucketNumber);
    //p^(n-k)
    //n is fixed: it represents the number of nails's row to the upper part of the board
    const pTo_n_minus_k = Math.pow(1-probabilitiesIndex,(9-bucketNumber));
    //Terms multiplied
    const probabilities = pTok*pTo_n_minus_k;

    //Once we have the probabilities we multiply it for the binomial calculation, then for the total number of balls
    //So that we obtain the number of balls dropped into the bucket
    return  Math.round(probabilities * binomialIndexes[bucketNumber] *  numberOfBalls);
    
}


/*Help function to calculate probabilities by the given bucket
    It works with probabilities coefficient and bucket position:
       
    Position:   0     1     2     3     4     5     6     7     8     9
    Chances: | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 |

*/

const probabilitiesByBucketNumber = (bucketNumber) => {
    
    if (bucketNumber === 0)
        return 0.1;
    else if (bucketNumber === 4 || bucketNumber === 5)
        return 0.5;
    else
        return (bucketNumber/10).toFixed(1);



}


//Export module
const Calculus = {
    NumOfBallsPerBucket,
    probabilitiesByBucketNumber
}

export default Calculus;