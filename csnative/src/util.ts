import { language } from "./language";

export function validateEmail(email: string): {check: boolean, message: string} {
    // TODO check email exists in redis
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return {check: emailRegex.test(email), message: language.invalidEmail};
}

export function validatePassword(password: string): {check: boolean, message: string} {
    return {check: isValidPassword(password), message: language.invalidPassword};
}

export function validateName(name: string): {check: boolean, message: string} {
    const upperRegex = /[a-zA-Z]/;
    return {check: upperRegex.test(name), message: language.invalidName}
}

export function validatePhoneNumber(phoneNumber: string): {check: boolean, message: string} {
    // TODO get us validation
    return {check: phoneNumber.length == 14, message: language.invalidPhone}
}

export function formatPhoneNumberUS(phoneNumber: string): string {
    phoneNumber = phoneNumber.replaceAll("-", "");
    phoneNumber = phoneNumber.replaceAll("(", "");
    phoneNumber = phoneNumber.replaceAll(")", "");
    phoneNumber = phoneNumber.replaceAll(" ", "");
    if (phoneNumber.length > 3 && phoneNumber.length < 7) {
        return phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3, phoneNumber.length);
    }
    if (phoneNumber.length >= 7 && phoneNumber.length <= 10) {
        return "(" + phoneNumber.substring(0, 3) + ") " + phoneNumber.substring(3, 6) + "-" + phoneNumber.substring(6, phoneNumber.length);
    }
    else{
        return phoneNumber;
    }
}

export function isValidPassword(password: string): boolean {
    const lowerRegex = /[a-z]/;
    const upperRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const requiredLength = 10;

    return (
        password.length >= requiredLength &&
        lowerRegex.test(password) &&
        upperRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)
    )
}