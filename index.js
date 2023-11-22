function distanceFromHqInBlocks(distance) {
    const hq = 42;
    let blocks;
    if (distance < hq){
        blocks = hq -distance;
        
    } else {
        blocks = distance - hq;
        
    }
    return blocks;
}

function distanceFromHqInFeet(distance) {
    let block =  distanceFromHqInBlocks(distance);
    let feet = block * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let dtBlocks;
    let dtFt;
    if (start < destination){
        dtBlocks = destination - start;
        dtFt = dtBlocks * 264        
    } else {
        dtBlocks = start - destination;
        dtFt = dtBlocks * 264
        
    }
    return dtFt;
  }

  function calculatesFarePrice(start, destination) {
    let fareDst = distanceTravelledInFeet(start, destination);
    if (fareDst <= 400){
        let freeSample = 0;
        return freeSample;
    } else if (fareDst > 400 && fareDst <= 2000){
        let chrg1 = (fareDst - 400) * .02;
        return chrg1
    } else if (fareDst > 2000 && fareDst < 2500){
        let chrg2 = 25;
        return chrg2
    } else if (fareDst > 2500){
        return "cannot travel that far"
    }
  }