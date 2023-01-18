import styled from "@emotion/styled";

export const RetenionBlock = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 50px;

@media (max-width: 991px) {
    justify-content: center;
    gap: 20px;
}
`

export const RetentionItem = styled.div`
text-align: center;

.retention-title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;

    @media (min-width: 992px) {
        font-size: 60px;
    }
    .retention-postfix {
        color: rgb(246, 197, 197);
    
        @media (min-width: 768px) {
            font-size: 30px;
        }
    
        @media (min-width: 992px) {
            font-size: 60px;
        }
    }
}


.retention-text {
    font-size: 20px;
    font-weight: 500;
}
`