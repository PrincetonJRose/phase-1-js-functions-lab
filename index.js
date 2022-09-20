// Code your solution in this file!

// console.log( calculatesFarePrice() )
function distanceFromHqInBlocks( location ) {

    if ( location <= 42 )
        return 42 - location
    else 
        return location - 42
    
    // return location < 42 ? 42 - location : location - 42

    // return Math.abs( location - 42 )
}

function distanceFromHqInFeet( blockNumber ) {
    let feet = distanceFromHqInBlocks( blockNumber ) * 264
    return feet
}

function distanceTraveledInFeet ( start, destination ) {
    if ( start >= destination ) {
        return ( start - destination ) * 264
    } else {
        return ( destination - start ) * 264
    }

    // let distance = Math.abs( ( start - destination ) * 264 )
    // return distance

    // return start >= destination ? ( start - destination ) * 264 : ( destination - start ) * 264
}

function calculatesFarePrice( startBlock, endBlock ) {
    let distance = distanceTraveledInFeet( startBlock, endBlock )
    
    if ( distance <= 400 ) {
        return 0
    } else if ( distance <= 2000 ) {
        return ( distance - 400 ) * .02
    } else if ( distance <= 2500 ) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
