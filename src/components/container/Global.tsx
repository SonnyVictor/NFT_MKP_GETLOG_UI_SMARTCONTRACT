import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 2560px;
  margin: 0px auto;
  padding-left: 12px;
  padding-right: 12px;

  @media only screen and (min-width: 835px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 1200px) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media only screen and (min-width: 1600px) {
    padding-left: 64px;
    padding-right: 64px;
  }
  @media screen and (max-width: 768px) {
    .view_mobile {
      gap: 50px;
    }
  }
  @media screen and (max-width: 550px) {
    .view_mobile {
      display: block;
    }
    .view_mobile .view_box_mobile {
      padding-top: 20px;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

const Global: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Global;
