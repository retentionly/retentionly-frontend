import styled from "@emotion/styled";

export const StatsStyled = styled.div`
padding-top: 40px;
padding-bottom: 50px;
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
    margin-top:10px;

    @media (min-width: 767px){
        margin-top:30px;
    }
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

    @media (max-width: 992px) {
        width: 40px;
    }
}
.stat-item-title {
    font-weight: 500 !important;
    margin-bottom: 10px;
    font-size:20px;
    @media (min-width:768px){
        font-size: 30px;
    }
    @media (min-width:992px){
        font-size: 60px;
    }

    span{
        display:inline-block;
        .arrow-icon{
            transform: rotate(90deg);
            width: 16px;
            height: 14px;
            position:relative;
            display:inline-block;
            @media (min-width:768px){
                width: 24px;
            height: 18px;
            }
            @media (min-width:992px){
                width: 48px;
            height: 36px;
            }
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
    font-size: 10px;

    @media (min-width:768px){
        font-size: 14px;
    }

    @media (min-width:992px){
        font-size: 16px;
    }
}
span{
    color: #9F7B7C;
}

`