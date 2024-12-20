import { useState } from 'react';
import '../../ModulesCss/SecondPage/MainWeb.css';
import BlockCource from '../ObjectsCource/BlockSource'
import HeaderAfterLogin from '../SecondPage/HeaderAfterAuth'
import UnderFLoor from '../FirstPage/underfloor'
import LogoCourceJava from '../../../assets/java.png'
import LogoCourcePython from '../../../assets/Python.png'
import LogoCourceC from '../../../assets/Cplusplus.png'


function LoadWeb() {
    return(
        <>
            <HeaderAfterLogin />
            <div id='mid-box'>
                <div className="cont">
                    <div className="block1">
                        <BlockCource linkImg={LogoCourceJava} imgID="javaLogo"
                        title="Java" titleID="JavaId"
                        text="Курс Java — это путь к освоению универсального языка программирования,
                        который используется для создания кроссплатформенных приложений, 
                        веб-сервисов и мобильных решений. Вы научитесь создавать надежные и  масштабируемые программы,
                        используя мощные инструменты и библиотеки  Java." textID="javaText"
                        buttText="Записаться на курс" buttID="but1"/>
                    </div>
                    <div className="block2">
                        <BlockCource linkImg={LogoCourcePython} imgID="pythonLogo"
                        title="Python" titleID="PythonID"
                        text="Язык  программирования, который широко используется в интернет-приложениях,
                        разработке программного обеспечения,
                        науке о данных и машинном обучении (ML).
                        Разработчики используют Python, потому что он эффективен,
                        прост в изучении и работает на разных платформах." textID="PythonText"
                        buttText="Записаться на курс" buttID="but2"/>
                    </div>
                    <div className="block3">
                        <BlockCource linkImg={LogoCourceC} imgID="cLogo"
                        title="C++" titleID="CID"
                        text="Курс C++ — это практическое руководство по основам программирования, 
                        которое поможет вам освоить язык, используемый для создания 
                        высокопроизводительных приложений и системного программного обеспечения. Вы изучите основы синтаксиса, 
                        ООП и работу с памятью, чтобы стать уверенным разработчиком." textID="CText "
                        buttText="Записаться на курс" buttID="but3"/>
                    </div>
                </div>
            </div>
            <UnderFLoor />
        </>
    )
}


export default LoadWeb;