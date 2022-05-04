import styled from "styled-components"
import {auth, provider} from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signInWithPopup, signOut} from "firebase/auth";

import {navbarMenuList} from "../constant/Const"

import {
    selectUserName,
    selectUserEmail,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";
import {useEffect} from "react";


const Header = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history('/home',);
            }
        });
    }, [userName])

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            signOut(auth, provider).then((result) => {
                dispatch(setSignOutState());
                history("/");
            }).catch((error) => {
                alert(error.message);
            });
        }

    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <a href={"/"}>
                    <img src="images/logo.svg" alt="Disney+"/>
                </a>
                <div>hi there</div>
            </Logo>
            {!userName
                ?
                <>
                    <LoginBtn onClick={handleAuth}>
                        <div>
                            LOGIN
                        </div>
                    </LoginBtn>
                </>
                :
                <>
                    {
                        navbarMenuList.map(function (item, i) {
                            return (
                                <NavMenu key={i}>
                                    <a href={`/${item.name.toLowerCase()}`}>
                                        <img src={`${item.path}`} alt={`${item.name}`}/>
                                        <span>{`${item.name}`}</span>
                                    </a>
                                </NavMenu>
                            )
                        })
                    }
                    <SignOut>
                        <UserPhoto>
                            <img src={userPhoto} alt=""/>
                        </UserPhoto>
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>


                </>
            }
        </Nav>
    );
}



const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.div`
  padding: 0;
  width: 80px;
  cursor: pointer;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0;
  position: relative;

  margin-left: 24px;
  float: left;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0 0 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }


  //@media (max-width: 768px) {
  //  display: none;
  //}
`

const LoginBtn = styled.button`
  margin-left: auto !important;
  justify-content: space-between;
  flex: available;
  float: left;
  height: 36px;
  width: 90px;
  border-width: 0.5px;
  border-radius: 3.5px;
  letter-spacing: 1.5px;
  font-size: 16px;
  border-color: #f9f9f9;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.7s ease 0s;

  div {
    color: #f9f9f9;
    margin-left: -5px;
    padding: 10px 16px 9px 15px;
    cursor: pointer;
  }

  &:hover {
    background-color: #f9f9f9;
    border-color: transparent;

    div {
      color: #040714;

    }
  }
`

const UserPhoto = styled.div`
  img {
    border-radius: 45px;
    padding: 10px;
    width: 100%;
    object-fit: cover;
    justify-items: center;
    align-items: center;
    flex: available;
    cursor: pointer;
    height: 100%;
  }

`

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;


`

const SignOut = styled.div`
  margin-left: auto !important;
  justify-content: space-between;
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;

  ${UserPhoto} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

`

export default Header;