export const getPlainText = (value) => {
    const text = value.map(item => item.children.map(el => el.text));
    const newText = text[0]
    return newText[0]
}

/* 
{data.map((item, key) => {
                    return (<p key={key}>{item.children.map(({ text, bold, underline, italic }) => {
                        return <Text key={key + 'fjd'} as="span" fontWeight={bold && "bold"} textDecor={underline && "underline"} style={{ fontStyle: `${italic ? 'italic' : 'normal'}`, display: 'inline' }}>
                            {text || placeholder}
                        </Text>
                    })}</p>)
                })}
*/