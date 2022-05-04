import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='images/cta-logo-one.svg' alt=""/>
                    <TitleDisc>The best stories, all in one place.</TitleDisc>
                    <SignUp>GET ALL THERE</SignUp>
                    <Disc>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
                        subscription. As
                        of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Disc>
                    <CTALogoTwo src='images/cta-logo-two.png' alt=""/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;


const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat !important;
  background-image: url('/images/background2.png');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 580px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: 3vw;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.button`
  font-weight: bold;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16.5px 0;
  font-size: 19px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  word-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  color: #f9f9f9;
  background-color: #0063e5;
`

const Disc = styled.p`
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 0.9px;
  font-size: 11px;
  line-height: 1.5;
  width: 100%;
  margin: 0px 0px 24px;
  word-spacing: 1.1px;
  display: inline-block;
  word-break: break-all;
`

const TitleDisc = styled.h1`
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 2px;
  font-size: clamp(1rem, -0.875rem + 8.33vw, 2.5rem);
  line-height: 1.5;
  width: 100%;
  margin: 0px 0px 24px 5px;
  text-align: start;
  word-spacing: 1.1px;
  display: flex;
  word-break: break-all;
`

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  vertical-align: bottom;
  width: 100%;
`


export default Login;