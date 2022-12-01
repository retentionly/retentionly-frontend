export const validateField = value => {
    const checkValue = value[0].children[0].text;
    if(checkValue){
        return true;
    } else {
        return false;
    }
}