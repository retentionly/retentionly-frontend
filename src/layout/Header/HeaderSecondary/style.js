import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderSecondaryStyled = styled.header`
    background: #F6C5C5;
    position: sticky;
    top: 0;
    z-index: 999;
    display:flex;
    align-items:center;
    padding: 0 14px 0 0; 
    .ml-auto{
        margin-left: auto!important;
    }
    .header-logo{
        background:#fff;
        display:flex;
        align-items:center;
        min-width:180px;
        max-width:228px;
      
    }
    @media (max-width:767px){
        padding: 10px; 
        // border-bottom: 1px solid #00000024;
        .header-logo{
            min-width:auto;
            max-width:30%;
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
               
                span{
                    height:100%;
                    display:flex;
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
        padding: 0;
        width: 150px;
        margin-left: auto;
        margin-right: 0;

        &-wrapper{
            @media (min-width:768px){
                flex-shrink:0;
            }
        }
        @media (min-width:767px){
            padding: 10px;
            margin-right: 0;
        }
    }
    
    .secondary-content {
        padding-top: 20px;
        padding-bottom: 20px;
        display: none;
        @media (min-width: 992px) {
            display: flex;
        }
    }

    .secondary-header-link {
        font-size: 22px;
        font-weight: 600;
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }

        span {
        font-size: 22px;
        margin-right: 0;
        }

        &.login-btn , &.demo-btn {
           button {
            font-weight: 600;
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

    &.secondary-content {
        justify-content: flex-start;
        ul {
            width: 100%;
            justify-content: flex-start;

            .login {
                margin-left: auto;
            }
        }
    }
`


export const Menu = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
    list-style: none;
    .disabled {
        pointer-events: none;
    }
    &.mobile-menu-demo {
        margin-left: auto;
        display: none;
        @media (max-width: 991px) {
            display: block;
        }
    }
    .demo {
        background: #000;
        padding: 5px;
        margin-right: 10px;
        a {
            background: #000;
            color: #fff;
            margin: 0;
            font-size: 22px;
        }
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
    font-size:15px;
    font-weight:500;
    flex-shrink: 0;
    padding-left:15px;
    padding-right:15px;
    
    display:flex;
    align-items:center;
    justify-content:center;
   @media(min-width:768px){
    padding-left:30px;
    padding-right:30px;
   }
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
    className: "header-button"
}

