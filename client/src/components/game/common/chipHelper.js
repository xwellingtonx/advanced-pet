//Get possible combinations for the chipe attack area base on a 3x3 matrix
//value 1 attack pattern, value 0 can move, value -1 can't move. 
/*
    0, 0, 0
    0, 0, 0
    0, 0, 0
*/
function getAllAreaCombinations() {
    var combinationList = [];

    /*
        0, -1, -1
        1, -1, -1
        0, -1, -1
    */
    combinationList.push({
        pattern: 1,
        matrixIndexes: [[0, -1, -1], [1, -1, -1], [0, -1, -1]]
    });

    /*
        0, 0, 0
        0, 1, 0
        0, 0, 0
    */
    combinationList.push({
        pattern: 2,
        matrixIndexes: [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
    });

    /*
        0, 0, -1
        1, 1, -1
        0, 0, -1
    */
   combinationList.push({
        pattern: 3,
        matrixIndexes: [[0, 0, -1], [1, 1, -1], [0, 0, -1]]
    });    

    /*
        -1, 0, 0
        -1, 1, 1
        -1, 0, 0
    */
    combinationList.push({
        pattern: 4,
        matrixIndexes: [[-1, 0, 0], [-1, 1, 1], [-1, 0, 0]]
    });   
        
    /*
        1, -1, -1
        1, -1, -1
        1, -1, -1
    */
    combinationList.push({
        pattern: 5,
        matrixIndexes: [[1, -1, -1], [1, -1, -1], [1, -1, -1]]
    });   
    
    /*
        0, 1, 0
        0, 1, 0
        0, 1, 0
    */
    combinationList.push({
        pattern: 6,
        matrixIndexes: [[0, 1, 0], [0, 1, 0], [0, 1, 0]]
    });          

    /*
        -1, -1, 0
        -1, -1, 0
        -1, -1, 0
    */
    combinationList.push({
        pattern: 7,
        matrixIndexes: [[-1, -1, 1], [-1, -1, 1], [-1, -1, 1]]
    });     

    /*
        0, 0, 0
        1, 1, 1
        0, 0, 0
    */
    combinationList.push({
        pattern: 8,
        matrixIndexes: [[0, 0, 0], [1, 1, 1], [0, 0, 0]]
    });    
    
    /*
        -1, 1, -1
         1, 1, -1
        -1, 1, -1
    */
    combinationList.push({
        pattern: 9,
        matrixIndexes: [[-1, 1, -1], [1, 1, -1], [-1, 1, -1]]
    });         

    /*
        -1, -1, 1
         1, 1, -1
        -1, -1, 1
    */
    combinationList.push({
        pattern: 10,
        matrixIndexes: [[-1, -1, 1], [1, 1, -1], [-1, -1, 1]]
    });   

    /*
        -1,  1, -1
         1, -1,  1
        -1,  1, -1
    */
    combinationList.push({
        pattern: 11,
        matrixIndexes: [[-1, 1, -1], [1, -1, 1], [-1, 1, -1]]
    });  

    /*
        1,  1, 1
        1, -1, 1
        1,  1, 1
    */
    combinationList.push({
        pattern: 12,
        matrixIndexes: [[1, 1, 1], [1, -1, 1], [1, 1, 1]]
    });      

    /*
         1,-1, 1
        -1, 1,-1
         1,-1, 1
    */
    combinationList.push({
        pattern: 13,
        matrixIndexes: [[1, -1, 1], [-1, 1, -1], [1,-1, 1]]
    });   

    /*
        -1, 1,-1
         1, 1, 1
        -1, 1,-1
    */
    combinationList.push({
        pattern: 14,
        matrixIndexes: [[-1, 1,-1], [1, 1, 1], [-1,1,-1]]
    });   

    /*
        1, 1, 0
        1, 1, 0
        1, 1, 0
    */
    combinationList.push({
        pattern: 15,
        matrixIndexes: [[1, 1,0], [1, 1, 0], [1,1,0]]
    }); 

    /*
        1, 1, 1
       -1,-1,-1
        1, 1, 1
    */
    combinationList.push({
        pattern: 16,
        matrixIndexes: [[1, 1, 1], [-1, -1, -1], [1,1,1]]
    });   
    
    /*
        1, 1, 1
       -1,-1, 1
        1, 1, 1
    */
    combinationList.push({
        pattern: 17,
        matrixIndexes: [[1, 1, 1], [-1, -1, 1], [1,1,1]]
    });  
    
    /*
        1, 1, 1
       -1,-1, 1
        1, 1, 1
    */
    combinationList.push({
        pattern: 18,
        matrixIndexes: [[1, 1, 1], [1, 1, 1], [1,1,1]]
    });      

    return combinationList;    
}

export function getChipAttackArea(chip) {

    var allCombinations = getAllAreaCombinations();
    var pattern = 1;

    if(chip.Pattern > 0) {
        pattern = chip.Pattern;
    } else {
        if(chip.AT > 0) {
            pattern = chip.AT - chip.CP;
        } else {
            pattern = chip.CP;
        }
    }

    return allCombinations.find(x => x.pattern === pattern).matrixIndexes;
}