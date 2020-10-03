const base_exp = 10;
const exp_increase_per_level = 0.08;
const max_level = 99;

export default class LevelupHelper {
    static level(exp) {

        var i = 1;//Starting from lvl 0, if you want to start from lvl 1, just initialize to 1
        var test_exp = base_exp;

            while ( i < max_level ) { //Test for max_level, replace with while(true) for no max
                if (test_exp > exp) { //Check if enough exp for lvl i
                    return i; //if so, return the level
                }

                //The test failed, so the exp is higher than the necessary for level i.
                test_exp = test_exp + test_exp * exp_increase_per_level; //Increase it by 8% to test the next level
                i++; //Since the test failed, the level is higher
            }

        return max_level;//Return when it reach max_level
    }

    static levelToExp(level) {
        if(level == 2)
            return base_exp; //return the base_exp when reach the first achievable level
        else {
            var prev = this.levelToExp(level-1); //Computes the previous level exp to calculate this one
            return prev + prev * exp_increase_per_level;
        }
    }

    static levelToTotalExp(level) {
        if(level == 2)
            return base_exp; //return the base_exp when reach the first achievable  level
        else {
            return this.levelToTotalExp(level-1) + this.levelToExp(level-1) * (1 + exp_increase_per_level);
        }
    }
}