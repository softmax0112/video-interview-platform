import React, { useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import SignInForm from "../components/Auth/signinform";
import AccountForm from "../components/Auth/accountform";
import SignupForm from "../components/Auth/signupform";
import BottomMenu from "../components/bottomMenu";
import BackButton from "../components/Auth/backButton";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";
import EmailLoginForm from "../components/Auth/emailloginform";
import ForgotPwdForm from "../components/Auth/forgotpwdform";
import EnterCodeForm from "../components/Auth/entercodeform";
import NewPwdForm from "../components/Auth/newpwdform";

function Auth({ mainScreen, setMainScreen }: { mainScreen: number, setMainScreen: any }) {
  const [showScreen, setshowScreen] = React.useState(0);

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel over-hdn auth-page">
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen > 0 ? (
            <BackButton showScreen={showScreen} setshowScreen={setshowScreen} />
          ) : (
            <></>
          )}
        </div>
        {showScreen == 0 ? (
          <SignInForm setshowScreen={setshowScreen} />
        ) : showScreen == 1 ? (
          <AccountForm setshowScreen={setshowScreen} />
        ) : showScreen == 3 ? <>
          <TestiMonials />
          <div className="lkljdfsl-sifkmd">
            <Icons iconNumber={66} />
            <Icons iconNumber={67} />
          </div>
          <div className="dkfnmsd-awde">
            <div className="wh-100 l1">
              <VideoForm />
            </div>
            <div className="wh-100 l2">
              <VideoForm />
            </div>
          </div>
          <div className="ldkf-kasmdaw"></div>
        </> : showScreen == 4 ? (
          <EmailLoginForm setshowScreen={setshowScreen} />
        ) : showScreen == 5 ? (
          <ForgotPwdForm setshowScreen={setshowScreen} />
        ) : showScreen == 6 ? (
          <EnterCodeForm setshowScreen={setshowScreen} />
        ) : showScreen == 7 ? (
          <NewPwdForm setshowScreen={setshowScreen} />
        ) : (
          <SignupForm setshowScreen={setshowScreen} setMainScreen={setMainScreen} />
        )}
        <div className="d-flex justify-content-center kdnklms-awendwd-11">
          <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
        </div>
      </div>
      <RightLayout2 setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
    </div>
  );
}

export default Auth;
