import styled from "styled-components";

export const ImageNft = styled.div`
    height: 200px !important;
    width: 200px !important;

    & > svg {
        height: 100% !important;
        width: 100% !important;
    }

`
export const Nodata = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  button{
    :hover{
        color: #fff !important;
    }
  }
`