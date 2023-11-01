//sex: M or F string
//weight,height,age ints
export function caloricIntake(sex,age,weight,height) {
    let bmr = 0;


    // For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
    if (sex === "F") {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);

    // For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)
    } else {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);

    }

    return bmr;

    // TODO: calculate amr too (combines bmr with a value in relation to workout intensity desired)
}