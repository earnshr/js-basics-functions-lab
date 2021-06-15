function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42
    } else if (street < 42) {
        return 42 - street
    } else {
        return 0
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) *264
    } else {
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end)
    if (feet <= 400) {
        return 0
    } else if (feet > 2500) {
        return "cannot travel that far"
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else {
        return (feet - 400) * .02
    }
}