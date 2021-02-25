// Code your solution in this file!

function distanceFromHqInBlocks (distanceInBlocks) {
    if (distanceInBlocks > 42) {
        return distanceInBlocks - 42
    }
    else if (distanceInBlocks < 42) {
        return 42 - distanceInBlocks
    }
}

function distanceFromHqInFeet(distanceInFeet) {
    return distanceFromHqInBlocks(distanceInFeet) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264 
    }
    else if (destination > start) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0
    }
    else if (400 <= feet && feet <= 2000) {
        return (feet - 400) * .02
    }
    else if (2500 >= feet && feet >= 2000) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}