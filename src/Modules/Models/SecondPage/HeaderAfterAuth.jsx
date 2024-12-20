import { useState } from 'react';
import '../../ModulesCss/SecondPage/HeaderAfterAuth.css'
import LogoWebPlatform from "../../../assets/Logo.png"
function Logo({LinkLogo, LogoID}) {
    return(
        <>
            <img src={LinkLogo} id={LogoID} alt="" />
        </>
    )
}
function GreenButton({ButtonID, ButtonText}) {
    return(
        <>
            <button id={ButtonID}>{ButtonText}</button>
        </>
    )
}
function FindLable({LableID, PlaceHolder, TypeLable}) {
    return(
        <>
            <input type={TypeLable} id={LableID} placeholder={PlaceHolder} />
        </>
    )
}
function HeaderAfterLogin() {
    return(
        <>
        <div className="main-box">
            <div className="head">
                <Logo LinkLogo={LogoWebPlatform} LogoID="LogoWebPlatform"/>
                <FindLable LableID="Find" PlaceHolder="Введите название курса" TypeLable="text"/>
                <GreenButton ButtonID="ButtonFind" ButtonText="Найти"/>
                <GreenButton ButtonID="ButtonPersonality" ButtonText="Личный кабинет"/>
            </div>
        </div>
        </>
    )
}
export default HeaderAfterLogin;