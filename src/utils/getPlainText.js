export const getPlainText = (value) => {
    if (value?.length > 0) {
        const text = value?.map(item => item.children.map(el => el.text));
        const newText = text[0]
        return newText[0]
    } else {
        return value;
    }
}
