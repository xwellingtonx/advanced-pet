import { ChipClasses } from  './constants'

//Get possible combinations for the chipe attack area base on a 3x3 matrix
/*
    0, 0, 0
    0, 0, 0
    0, 0, 0
*/
function getAllAreaCombinations() {
    var combinationList = [];

    combinationList.push({
        areaSize: 1,
        matrixIndexes: [{r: 1, c: 1}]
    });

    combinationList.push({
        areaSize: 2,
        matrixIndexes: [{r: 1, c: 0}, {r: 1, c: 1}]
    });

    combinationList.push({
        areaSize: 3,
        matrixIndexes: [{r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}]
    });

    combinationList.push({
        areaSize: 4, 
        matrixIndexes: [{r: 1, c: 0}, {r: 1, c: 1}, {r: 0, c: 2},  {r: 2, c: 2}]
    });

    combinationList.push({
        areaSize: 5, 
        matrixIndexes: [{r: 0, c: 1}, {r: 1, c: 0}, {r: 1, c: 1},  {r: 1, c: 2}, {r: 2, c: 1}]
    });

    combinationList.push({
        areaSize: 6, 
        matrixIndexes: [{r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0},  {r: 0, c: 1}, {r: 1, c: 1},  {r: 2, c: 1}]
    });

    combinationList.push({
        areaSize: 9,
        matrixIndexes: [{r: 0, c: 0},{r: 0, c: 1},{r: 0, c: 2},{r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2},{r: 2, c: 0},{r: 2, c: 1},{r: 2, c: 2}]});

    return combinationList;
}

function findChipAreaCombination(chip) {
    var allCombinations = getAllAreaCombinations();

    if(chip.Classe === ChipClasses.Standard) {
        if(chip.AT < 5) {
            return allCombinations.find(x => x.areaSize === chip.AT);
        } else {
            //Decrease the power of the chip because is standard
            var newAt = (chip.AT - chip.CP);
            
            return allCombinations.find(x => x.areaSize === (newAt <= 0 ? 2 : newAt));
        }
    } else { //Mega/Giga/Navi
        if(chip.AT > 6) {
            //Just get the combination with size 9
            return allCombinations.find(x => x.areaSize === 9);
        } else {
            return allCombinations.find(x => x.areaSize === chip.AT);
        }
    }
}

export function getChipAttackArea(chip) {

    //Create a 3x3 matrix with zeros inside.
    var matrix = Array(3).fill(null).map(() => Array(3).fill(0));

    //Get chip area combination
    var combination = findChipAreaCombination(chip);

    if(combination) {
        for(var row = 0; row < matrix.length; row++) {
        for(var column = 0; column < matrix.length; column++) {
            //Replace zeros for one to mark the space
            if(combination.matrixIndexes.some(elem => elem.r === row && elem.c === column)) {
                matrix[row][column] = 1;
            }
            }
        }
    }

    return matrix;
}