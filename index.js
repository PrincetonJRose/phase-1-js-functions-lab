// Code your solution in this file!
const distanceFromHqInBlocks = ( location ) => Math.abs( 42 - location )

const distanceFromHqInFeet = ( location ) => distanceFromHqInBlocks( location ) * 264

const distanceTraveledInFeet = ( location1, location2 ) => Math.abs( location1 - location2 ) * 264

const calculatesFarePrice = ( location1, location2 ) => {
    let distance = distanceTraveledInFeet( location1, location2 )

    switch ( true ) {
        case distance > 400 && distance <= 2000 :
            return ( distance - 400 ) * .02
        case distance > 2000 && distance <= 2500 :
            return 25
        case distance > 2500 :
            return "cannot travel that far"            
        default : return 0
    }
}