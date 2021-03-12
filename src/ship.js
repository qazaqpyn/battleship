const Ship = (position) => {

    const getInfo = () => position;

    const getLength = () => position.length;

    const hit = (number) => {
        for(let i = 0; i<getLength(); i++){
            if(position[i].coordinate===number){
                position[i].hit = true;
                return true;
            }
        }
        return false;
    }

    const isSunk = () => {
        for(let i = 0; i<getLength(); i++){
            if(position[i].hit===false){
                return false;
            }
        }
        return true;
    }

    return {getLength, hit, isSunk, getInfo}
}

module.exports = Ship;