// Code your solution in this file!
const distanceFromHqInBlocks = ( location ) => Math.abs( 42 - location )

const distanceFromHqInFeet = ( location ) => distanceFromHqInBlocks( location ) * 264

const distanceTraveledInFeet = ( location1, location2 ) => Math.abs( location1 - location2 ) * 264

const calculatesFarePrice = ( location1, location2 ) => {
    let distance = distanceTraveledInFeet( location1, location2 )
    let price

    switch ( true ) {
        case distance > 400 && distance <= 2000 :
            price = ( distance - 400 ) * .02
            break
        case distance > 2000 && distance <= 2500 :
            price = 25
            break
        case distance > 2500 :
            price = "cannot travel that far"
            break
        default : price = 0
    }
    return price
}