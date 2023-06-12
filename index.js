// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(42-blocks)
}

function distanceFromHqInFeet(blocks) {
    return Math.abs(distanceFromHqInBlocks(blocks)*264)
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(start-end)*264
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination-start)*264
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000 ) {
        return Math.abs(distance-400)*.02
    }
    else if (distance > 2000 && distance < 2500 ) {
        return 25
    }
    else if (distance > 2500) {
        return`cannot travel that far`
    }
}