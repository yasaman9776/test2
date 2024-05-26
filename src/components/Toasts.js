import React from 'react';
import styled from 'styled-components';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from "../assets/img/error.png";
import Warning from "../assets/img/warning.png";
import Successful from "../assets/img/successful.png";
import Notice from "../assets/img/notice.png";
import {CokatexColors} from '../helper/colors';
import CrossIcon from '../assets/icon/Cross';
const CustomToastContainer = styled(ToastContainer).attrs({className: "toast-container", toastClassName: "toast", bodyClassName: "body", progressClassName: "progress"})`
   .Toastify__toast--error{
        background-color:#fff;
        border-right:8px solid #F7D1DC;
        font-family:"IRANYekan";
        font-size:14px;
        color:${CokatexColors.error};
        display:flex;
        align-items:center;
    }
    .Toastify__toast--warning{
      background-color:#fff;
      border-right:8px solid #FFEACA;
      font-family:"IRANYekan";
      font-size:14px;
      color:${CokatexColors.alert};
      display:flex;
      align-items:center;
  }
  .Toastify__toast--success{
    background-color:#fff;
    border-right:8px solid #CDEAD7;
    font-family:"IRANYekan";
    font-size:14px;
    color:${CokatexColors.accept};
    display:flex;
    align-items:center;
}
.Toastify__toast--info{
  background-color:#fff;
  border-right:8px solid #D4D9E2;
  font-family:"IRANYekan";
  font-size:14px;
  color:${CokatexColors.navyBlue};
  display:flex;
  align-items:center;
}
    .Toastify__toast-icon {
        margin-left:20px;
        
    }
  `;

const CloseButton = ({closeToast}) => (<CrossIcon
    onClick={closeToast}
    color={`${CokatexColors.lightGray}`}
    width={"16px"}
    height={"16px"}/>);
const errorToast = ({props}) => toast.error(' عملیات با خطا روبرو شد !', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    rtl: true,
    icon: ({theme, type}) => <img
            src={Error}
            alt=""
            style={{
            width: "32px",
            hight: "32px",
            marginLeft: "5px"
        }}/>
});
const warningToast = ({props}) => toast.warning(' با احتیاط اطلاعات را وارد کنید', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    rtl: true,
    icon: ({theme, type}) => <img
            src={Warning}
            alt=""
            style={{
            width: "32px",
            hight: "32px",
            marginLeft: "5px"
        }}/>
});
const successToast = ({props}) => toast.success(' عملیات با موفقیت انجام شد !', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    rtl: true,
    icon: ({theme, type}) => <img
            src={Successful}
            alt=""
            style={{
            width: "32px",
            hight: "32px",
            marginLeft: "5px"
        }}/>
});
const infoToast = ({props}) => toast.info(' از صحت اطلاعات مطمئن شوید!', {
    position: "bottom-left",
    autoClose:5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    rtl: true,
    icon: ({theme, type}) => <img
            src={Notice}
            alt=""
            style={{
            width: "32px",
            hight: "32px",
            marginLeft: "5px"
        }}/>
});
export const ErrorToast = ({props}) => {

    return (
        <div>
            <button onClick={errorToast}>Error Toast</button>
            <CustomToastContainer closeButton={CloseButton}/>
        </div>
    );
}

export const WarningToast = ({props}) => {

    return (
        <div>
            <button onClick={warningToast}>Warning Toast</button>
            <CustomToastContainer closeButton={CloseButton}/>
        </div>
    );
}
export const SuccessToast = ({props}) => {

    return (
        <div>
            <button onClick={successToast}>Success Toast</button>
            <CustomToastContainer closeButton={CloseButton}/>
        </div>
    );
}
export const InfoToast = ({props}) => {

    return (
        <div>
            <button onClick={infoToast}>info Toast</button>
            <CustomToastContainer closeButton={CloseButton}/>
        </div>
    );
}