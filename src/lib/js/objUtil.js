function isNotEmpty(obj){
    if(typeof(obj) === 'string'){
        return obj !== null && obj !== '' && obj !== undefined;
    }else if(typeof(obj) === 'array'){
        return obj.length > 1;
    }else if(typeof(obj) === 'object'){
        return obj !== null && obj !== '' && obj !== undefined;
    }else if(typeof(obj) === 'number'){
        return obj !== null && obj !== undefined;
    }else if(typeof(obj) === 'undefined'){
        return false;
    }
}
export default{
    isNotEmpty
}