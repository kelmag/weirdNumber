export function sumIsGreater(value) {
    let divisors = [];
    for (let index = 1; index <= (value / 2); index++) {
        if (value % index === 0) {
            divisors = [...divisors, index]
        }
    }

    return {
        sum: divisors.reduce((sum, num) => sum + num, 0),
        divisors: divisors,
        condition: divisors.reduce((sum, num) => sum + num, 0) > value
    }
}

export function subsetSums(value, divisors) {
    var subSets = [[]];
    for (var i = 0; i < divisors.length; i++) {
        for (var j = 0, length = subSets.length; j < length; j++) {
            var temp = subSets[j].concat(divisors[i]);
            subSets.push(temp);
            var setSum = temp.reduce((sum, number) => sum + number);
            if (setSum == value) {
                return {
                    condition: false,
                    set: temp,
                };
            }
        }
    }

    return { condition: true };

}
