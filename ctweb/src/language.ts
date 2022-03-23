import {ILanguage} from "./language.i";

const dateFormatter = "MM / DD / YYYY";

export const language: ILanguage = {
    account: {
        title: "Account",
        billing: {
            title: "Billing"
        },
        users: {
            title: "Users"
        },
        settings: {
            title: "Settings"
        }
    },
    back: "Back",
    contact: "Contact",
    continue: "Continue",
    create: "Create",
    edit: "Edit",
    events: {
        confirm: {
          title: "This event has been published",
          info: "A confirmation will be sent to your email regarding your value contribution when it has been processed"
        },
        title: "Events",
        createFirst: "Create your first event"
    },
    basicInfo: {
        header: "Basic Information",
        eventTitle: "Title of Event",
        description: "Decription"
    },
    timeFrame: {
        header: "Timeframe",
        startDate: "Start Date",
        endDate: "End Date",
        dateFormatter: dateFormatter
    },
    location: {
        header: "Location"
    },
    coverPhoto: {
        header: "Cover Photo"
    },
    logOut: "Log out",
    org: "Organization",
    profileImage: {
        title: "Profile Image",
        info: "This image will be shown with events published by your organization."
    },
    publish: "Publish",
    return: "Return",
    signUp: {
        org: {
            fields: {
                name: "Name",
                address: "Address",
                city: "City",
                state: "State",
                postalCode: "Postal",
                country: "Country"
            }
        },
        contact: {
            fields: {
                firstName: "First Name",
                lastName: "Last Name",
                identifier: "Email Address",
                phoneNumber: "Phone Number"
            }
        }
    },
    upload: "Upload"
}