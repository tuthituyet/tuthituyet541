function splitText(str,delimiter){
    let a = [];
    for (i = 0; i < str.length; i++){
        if (str[i] != delimiter){
            a.push(str[i])
        }
        return a;
    }
}
splitText("a,b,c")