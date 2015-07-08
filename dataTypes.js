function dataTypes(value){
    if(value === null || typeof value === 'undefined'){
        return "no value";
    }else if(typeof value === 'number'){
        if(value < 100){
            return "less than 100";
        }else if(value > 100){
            return "more than 100";
        }else{
            return "equal to 100";
        }
    }else if(typeof value === 'string'){
        return value.length;
    }else if(typeof value === 'object'){
        return value[2];
    }else if(typeof value === 'function'){
        return callback(true);
    }else if(typeof value === 'boolean' ){
        return value;
    }
}

function callback(arg) {
    if(arg === true) {
        return 'called callback';
    }
}

