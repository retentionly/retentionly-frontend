import styled from "@emotion/styled";

export const StatsStyled = styled.div`
margin-top: 50px;
margin-bottom: 50px;
text-align: center;
`

export const StatsContainer = styled.div`
max-width: 1200px;
margin: 30px auto auto;
`

export const SliderItemStyled = styled.div`
.slick-track{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.slick-dots{
    position:static;
    margin-top:30px;
    li{
        margin:0;
        button{
            &:before{
                font-size:10px;
            }
        }
    }
}
`

export const StatItem = styled.div`
.stat-icon {
    margin: 0 auto 10px;
}
.stat-item-title {
    font-weight: 500 !important;
    margin-bottom: 10px;
    font-size:40px;
    @media (min-width:768px){
        font-size: 60px;
    }
    span{
        display:inline-block;
        .arrow-icon{
            transform: rotate(90deg);
            width: 48px;
            height: 36px;
            position:relative;
            display:inline-block;
           svg{
            position:absolute;
            vector:non-scaling-stroke;
            top:0;
            left:0;
            height:100%;
            --stroke-width: 0;
            --fill-opacity: 1;
            --stroke: #5E97FF;
            --stroke-opacity: 1;
            --fill: #FFC3C4;
            width: var(--svg-calculated-width,100%);
            height: var(--svg-calculated-height,100%);
            padding: var(--svg-calculated-padding,0);
            margin: auto;
            path{
                fill:#9F7B7C;
            }
            *{
                vector-effect: non-scaling-stroke;
            }
           }
        }
    }
}

.stat-item-text {
    font-size: 16px;
}
span{
    color: #9F7B7C;
}

`