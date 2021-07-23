function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

export default shuffle 

function createTeams( arr ) {

    for (i = 0; i < arr.length; i++) {
        const a = arr.slice[i,i+1];
        return a;
    }
};


