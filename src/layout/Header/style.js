import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
    background: #F6C5C5;
    display:flex;
    align-items:center;
    padding-right:30px;
    .header-logo{
        background:#fff;
        display:flex;
        align-items:center;
        min-width:228px;
        max-width:228px;
    }
    @media (max-width:767px){
        padding-right:0;
        .header-logo{
            min-width:auto;
            max-width:50%;
            width:50%;
            justify-content:center;
            height:60px;
        }
        flex-wrap:wrap;
        order:1;
        .header-button{
            height:100%;
            &-wrapper{
                order:2;
                height:60px;
                margin-left:auto;
                width:50%;
                span{
                    height:100%;
                    display:inline-flex;
                }
            }
        }
        .header-content{
            width:100%;
            order:3;
            justify-content:center;
        }
    }
    .header-button{
        &-wrapper{
            @media (min-width:768px){
                flex-shrink:0;
            }
        }
    }

`

export const HeaderContent = styled(Box)`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 10px 26px;
`
HeaderContent.defaultProps ={
    className:"header-content"
}

export const Menu = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    list-style: none;
    .disabled {
        pointer-events: none;
    }
`
Menu.defaultProps ={
    className:"header-menu"
}

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
    font-size:15px;
    flex-shrink: 0;
    padding-left:15px;
    padding-right:15px;
   @media(min-width:768px){
    padding-left:30px;
    padding-right:30px;
   }
    display:flex;
    align-items:center;
    justify-content:center;
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

HeaderButton.defaultProps = {
    className:"header-button"
}

