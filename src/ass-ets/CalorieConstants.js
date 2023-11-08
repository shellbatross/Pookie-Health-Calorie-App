//sex: M or F string
//weight,height,age ints
export function caloricIntake(sex,age,weight,height) {
    console.log(sex)
    console.log(age)
    console.log(weight)
    console.log(height)
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

//Burning calories: METS X 3.5 X BW (KG) / 200 = KCAL/MIN
/*
Running

7 mph (8.5 min/mile) I am not doing this for every mile possible

11.5

conditioning exercise

weight lifting (free weight, nautilus, or universal-type), powerlifting or bodybuilding, vigorous effort

6.0

Bicycling

12-13.9 mph, moderate effort

10.0

Custom workout? Can't do that bro METS X 3.5 X BW (KG) / 200 = KCAL/MIN.
*/


function METSRunning(weight,time){
    const pounds_in_kg = Math.floor(weight*0.45359237)
    const tmp = (11.5*pounds_in_kg*3.5)/200
    console.log(tmp)
    const ans = Math.floor(tmp*time)
    console.log(ans)
    return ans
}

function METSBiking(weight,time){
    const pounds_in_kg = Math.floor(weight*0.45359237)
    const tmp = (10.0*pounds_in_kg*3.5)/200
    console.log(tmp)
    const ans = Math.floor(tmp*time)
    console.log(ans)
    return ans
}

function METSLifting(weight,reps){
    const pounds_in_kg = Math.floor(weight*0.45359237)
    const tmp = (6.0*pounds_in_kg*3.5)/200
    const ans = Math.floor(tmp*reps)
    return ans
}

export const MET_functions = {"Running":METSRunning, "Biking":METSBiking, "Lifting":METSLifting}

