export interface ILanguage {
    account: {
        title: string;
        billing: {
            title: string;
        },
        users: {
            title: string;
        },
        settings: {
            title: string;
        }
    },
    back: string;
    contact: string;
    continue: string;
    create: string;
    edit: string;
    events: {
        confirm: {
            title: string;
            info: string;
        },
        title: string;
        createFirst: string;
    },
    basicInfo: {
        header: string;
        eventTitle: string;
        description: string;
    },
    timeFrame: {
        header: string,
        startDate: string,
        endDate: string,
        startTime: string,
        endTime: string,
        timeFormatter: string,
        dateFormatter: string
    },
    location: {
        header: string
        fields: {
            address: string,
            city: string,
            state: string,
            postalCode: string,
            country: string
        },
    },
    logOut: string;
    org: string;
    profileImage: {
        title: string;
        info: string;
    },
    publish: string;
    return: string;
    signUp: {
        org: {
            fields: {
                name: string,
                address: string,
                city: string,
                state: string,
                postalCode: string,
                country: string
            }
        },
        contact: {
            fields: {
                firstName: string,
                lastName: string,
                identifier: string,
                phoneNumber: string   
            }
        }
    },
    upload: string;
}