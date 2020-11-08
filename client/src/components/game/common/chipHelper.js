//Get possible combinations for the chipe attack area base on a 3x3 matrix
//value 1 attack pattern, value 0 can move, value -1 can't move. 
/*
    0, 0, 0
    0, 0, 0
    0, 0, 0
*/
function getAllAreaCombinations() {
    const combinationList = [];

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

//The vales are based where the chip will be used in the code
const supportChipsEffects = [
    { id: "083", value: 850, description: "Enemy Speed Down" }, //virus speed movement to 0.85 Seconds
    { id: "084", value: 900, description: "Enemy Speed Down" },  //virus speed movement to 0.90 Seconds
    { id: "091", value: [[0, 0, 0], [1, 0, 0], [0, 0, 0]], description: "Breaks Painel" },  //breaks game board in the middle on the first column
    { id: "092", value: [[1, 0, 0], [0, 0, 0], [1, 0, 0]], description: "Breaks Painel" },  //breaks game board in the top and bottom on the first column
    { id: "093", value: [[1, 0, 0], [1, 0, 0], [1, 0, 0]], description: "Breaks Painel" },  //breaks game board on all first column (Not original value)
    { id: "107", value: 1, description: "HP Recovery"}, //recovers 1
    { id: "108", value: 2, description: "HP Recovery"}, //recovers 2
    { id: "109", value: 3, description: "HP Recovery"}, //recovers 3
    { id: "110", value: 4, description: "HP Recovery"}, //recovers 4
    { id: "111", value: 6, description: "HP Recovery"}, //recovers 6
    { id: "112", value: 8, description: "HP Recovery"}, //recovers 8
    { id: "113", value: 10, description: "HP Recovery"}, //recovers 10 (Not original value)
    { id: "114", value: 12, description: "HP Recovery"}, //recovers 12 (Not original value)
    { id: "115", value: 5, description: "HP Recovery"}, //recovers 5 
    { id: "116", value: [[0, 0, 0], [1, 0, 0], [0, 0, 0]], description: "Breaks Painel" },  //breaks game board in the middle on the first column
    { id: "117", value: [[1, 0, 0], [1, 0, 0], [1, 0, 0]], description: "Breaks Painel" },  //breaks game board on all first column 
    { id: "120", value: 1000, description: "Navi ATK 20s"}, //Megaman gets 20 seconds to attack 
    { id: "121", value: 1500, description: "Enemy ATK 5s "}, //enemy get 5 seconds to attack,
    { id: "123", value: [[0, 0, 0], [1, 0, 0], [0, 0, 0]], description: "Breaks Painel" },  //breaks game board in the middle on the first column
    { id: "124", value: [[1, 0, 0], [1, 0, 0], [1, 0, 0]], description: "Breaks Painel" },  //breaks game board on all first column 
    { id: "125", value: [[1, 0, 0], [1, 0, 0], [1, 0, 0]], description: "Breaks Painel" },  //breaks game board on all first column 
    { id: "129", value: 0.03, description: "Evasion UP 3" },  //evasion enemy level 3%
    { id: "133", value: 0.01, description: "Evasion UP 1" },  //evasion enemy level 1%
    { id: "134", value: 0.02, description: "Evasion UP 2" },  //evasion enemy level 2%
    { id: "135", value: 2, description: "Enemy ATK Down 2" },  //enemy attack down 2
    { id: "136", value: 4, description: "Enemy ATK Down 4" },  //enemy attack down 4
    { id: "137", value: 6, description: "Enemy ATK Down 6" },  //enemy attack down 6 (not original value)
    { id: "139", value: 8, description: "Enemy ATK Down 8" },  //enemy attack down 8 (not original value)
    { id: "201", value: 0.1, description: "Evasion UP 10" },  //increase evasion enemy 10%
    { id: "205", value: 0.3, description: "Navi ATK UP 30" },  //increase 30% navi attack power
    { id: "206", value: 0.2, description: "Enemy Miss UP 20" },  //increase 20% enemy miss percentage
    { id: "208", value: 10, description: "Enemy ATK Down 10" }];  //enemy attack down 10


export function getSupportChipEffectById(chipId) {
    return supportChipsEffects.find(x => x.id === chipId);
}