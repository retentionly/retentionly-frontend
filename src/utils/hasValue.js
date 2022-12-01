export const hasValue = (value) => {
    const checkValue = value[0].children[0].text;
    return Boolean(checkValue);
}