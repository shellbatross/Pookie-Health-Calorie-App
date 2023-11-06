//Please store constants here and then export them
    /*
                            ╱|、
                          (˚ˎ 。7  ~~~ Meow ~~
                           |、˜〵          -Steph
                          じしˍ,)ノ


    */


//Map to see if the pace is is to do less or do more than the goal (i.e speed should be <=, reps >=)
export const go_up_down_map = {
    "Running": "<=",
    "Biking": "<=",
    "Lifting": ">=",
    "Other": ">=",
}

export const anythingThatNeedsPace = {
    "Running":true,
    "Biking":true,
    "Duration":true,
    "Speed":true

}

export const formWorkoutText = {
    "Running": {"input1":"Run Distance", "input2":"Run Duration", "placeholder1":"10", "placeholder2":"40","metric1":"miles","metric2":"minutes"},
    "Biking": {"input1":"Biking Distance", "input2":"Biking Duration", "placeholder1":"10", "placeholder2":"40","metric1":"miles","metric2":"minutes"},
    "Lifting": {"input1":"Reps", "input2":"Weight", "placeholder1":"10", "placeholder2":"40","metric1":"reps","metric2":"pounds"},
}

export const otherWorkoutText = {
    "Duration":{"metric":"Distance"},
    "Speed":{"metric":"Distance"}
}
export function formulaForPace(distance,time){
    return Math.floor(time/distance)
}
