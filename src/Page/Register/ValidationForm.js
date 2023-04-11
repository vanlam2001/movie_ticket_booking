import { message } from "antd";
import validator from "validator";

const { isLength } = require('validator');
const { equals } = require('validator');
const { matches } = require('validator');
const { isMobilePhone } = require('validator');




export const checkPassword = (passwords) => {
    let checkPassword = false;
    const isValidPassword = isLength(passwords.trim(), { min: 4 });

    if (isValidPassword) {
        checkPassword = true;
    }
    else {
        message.error('Mật khẩu ít nhất 4 ký tự trở lên!');
    }

    return checkPassword;
}


export const repeatPassword = (passowrd, repeatPassword) => {
    let checkPassword = false;
    const isValidPassword = equals(passowrd, repeatPassword);

    if (isValidPassword) {
        checkPassword = true;
    }

    else {
        message.error("Mật khẩu không khớp!");
    }

    return checkPassword;
}

export const checkFullName = (fullNmae) => {
    let checkName = false;
    const isFullNameValid = matches(fullNmae, /^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,}$/);

    if (isFullNameValid) {
        checkName = true;
    }

    else {
        message.error("Họ tên không hợp lệ!");
    }

    return checkName
}


export const checkEmail = (email) => {
    let checkMail = false;
    const validator = require('validator');

    if (validator.isEmail(email)) {
        checkMail = true;
    }

    else {
        message.error("Email không hợp lệ");
    }

    return checkMail;
}

export const checkPhoneVietNam = (soDt) => {
    let flag = false;
    // Kiểm tra số điện thoại ở Việt Nam
    const isPhoneNumberValid = isMobilePhone(soDt, /^\d{10}$/);

    if (isPhoneNumberValid) {
        flag = true;
    }

    else {
        message.error("Số điện thoại không hợp lệ!")
    }

    return flag;
} 