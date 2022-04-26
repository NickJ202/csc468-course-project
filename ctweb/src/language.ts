import { ILanguage } from "./language.i";

const dateFormatter = "MM / DD / YYYY";
const timeFormatter = "00 : 00 PM";

export const language: ILanguage = {
  account: {
    title: "Account",
    billing: {
      title: "Billing",
    },
    users: {
      title: "Users",
    },
    settings: {
      title: "Settings",
    },
  },
  adminSignUpInfo:
    "Please enter your email and create a password, this will be the administrative user of the system.",
  alreadyHaveAccount: "Aready have an account ? Log in here",
  back: "Back",
  contact: "Contact",
  continue: "Continue",
  create: "Create",
  edit: "Edit",
  enterValidEmail: "Please enter a valid email",
  errorOccurred: "Error Occurred",
  events: {
    confirm: {
      title: "This event has been published",
      info: "A confirmation will be sent to your email regarding your value contribution when it has been processed.",
    },
    title: "Events",
    createFirst: "Create your first event",
  },
  basicInfo: {
    header: "Basic Information",
    eventTitle: "Title of Event",
    description: "Decription",
  },
  participants: {
    header: "Participant Information",
  },
  timeFrame: {
    header: "Timeframe",
    startDate: "Start Date",
    endDate: "End Date",
    startTime: "Start Time",
    endTime: "End Time",
    timeFormatter: timeFormatter,
    dateFormatter: dateFormatter,
  },
  location: {
    header: "Location",
    fields: {
      address: "Address",
      city: "City",
      state: "State",
      postalCode: "Postal",
      country: "Country",
    },
  },
  logIn: "Log in",
  logInHeader: "Welcome Back!",
  logInInfo: "Login information",
  logOut: "Log out",
  org: "Organization",
  profileImage: {
    title: "Profile Image",
    info: "This image will be shown with events published by your organization.",
  },
  publish: "Publish",
  return: "Return",
  submit: "Submit",
  auth: {
    org: {
      fields: {
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        postalCode: "Postal",
        country: "Country",
      },
    },
    contact: {
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        password: "Password",
        passwordConfirm: "Confirm Password",
        phone: "Phone Number",
      },
    },
  },
  upload: "Upload",
};
