import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
    background:#000;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 60px;
`

export const Menu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
`
Menu.Item = styled.li`
    margin:0;
    color:#fff;
    a{
        padding:0 15px;
        color:inherit;
    }
`
export const HeraderButtonGroup = styled.div`
    --x: ${props => props.spacingX ?? 0};
    --y:${props => props.spacingY ?? 0};
    display:flex;
    margin-left:calc(-1 * var(--x));
    margin-right:calc(-1 * var(--x));
    margin-top:calc(-1 * var(--y));
    margin-bottom:calc(-1 * var(--y));
    >*{
        margin-left:var(--x);
        margin-right:var(--x);
        margin-top:var(--y);
        margin-bottom:var(--y);
    }
`
export const HeaderButton = styled.a`
    --blue:#18A0FB;
    padding-top:11px;
    padding-bottom:11px;
    padding-left:42px;
    padding-right:42px;
    font-size:15px;
    border-radius:6px;
    height:100%;
    ${props => props.blue &&`
        color:#FFF;
        background:var(--blue);
        border:1px solid var(--blue);
    `}
    ${props => props.white &&`
        color:#18A0FB;
        background:#fff;
        border:1px solid var(--blue);
    `}
`
