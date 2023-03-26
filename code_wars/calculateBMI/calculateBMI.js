/**
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 * @param {*} weight 
 * @param {*} height 
 * @returns 
 */
function bmi(weight, height) {
    let bmi = (weight / (height * height));
    let result = "";
    if (bmi <= 18.5) {
        result = "Underweight";
    } else if (bmi <= 25.0) {
        result = "Normal";
    } else if (bmi <= 30.0) {
        result = "Overweight";
    } else if (bmi > 30) {
        result = "Obese";
    }
    return result;
}

export default bmi;