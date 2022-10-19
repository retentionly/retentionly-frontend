import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
    background: #F6C5C5;
    display:flex;
    img {
        height: 60px;
    }
`

export const HeaderContent = styled(Box)`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 10px 26px;
`

export const Menu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    .disabled {
        pointer-events: none;
    }
`

Menu.Item = styled.li`
    margin:0;
    color:#000;
    
    a{
        font-size: 15px;
        font-weight: 500;
        padding:0 15px;
        color:#000;
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
    --blue:#000;
    padding-top:6px;
    padding-bottom:6px;
    padding-left:30px;
    padding-right:30px;
    font-size:15px;
    
    ${props => props.blue && `
        color:#FFF;
        background:var(--blue);
        border:1px solid var(--blue);
    `}
    ${props => props.white && `
        color:#18A0FB;
        background:#fff;
        border:1px solid var(--blue);
    `}
`
