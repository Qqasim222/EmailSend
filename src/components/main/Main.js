import React, { Fragment, useState } from "react";
import UsersList from "../usersInfoTable/UsersList";
import Forms from "../forms/Forms";

const Main = () =>{
    const [nonProfitUsersList, setNonProfitUsersList] = useState([]);
    const [foundationUsersList, setFoundationUsersList] = useState([]);
    const [emailTemplateForm, setEmailTemplateForm] = useState([])

    const onAddNonProfitUser = (Unames, Uaddresses, Uemails) => {
        setNonProfitUsersList((prevUsersList) => {
            return [...prevUsersList,
            {
                name: Unames,
                address: Uaddresses,
                email: Uemails,
                type: 'Non-profit'
            }]

        })
    }
    const onAddFoundationUser = (Uemail, serviceId) => {
        setFoundationUsersList((prevUsersList) => {
            return [...prevUsersList,
            {
                emails: Uemail,
                type: 'Foundation',
                serviceId: serviceId
            }]

        })
    }

    const onAddEmailTemplateForm = (obj) => {
        setEmailTemplateForm((prevUsersLists) => {
            return [...prevUsersLists,
            {
                name: obj.name,
                email: obj.email,
                subject: obj.subject,
                message: obj.message
            }]

        })
    }

    return (
        <Fragment>
            <Forms
                onAddNonProfitUser={onAddNonProfitUser}
                onAddFoundationUser={onAddFoundationUser}
                onAddEmailTemplateForm={onAddEmailTemplateForm}
                nonProfitUsersList={nonProfitUsersList}
                foundationUsersList={foundationUsersList}
            />
            <UsersList
                nonProfitUsersList={nonProfitUsersList}
                foundationUsersList={foundationUsersList}
                setEmailTemplateForm={setEmailTemplateForm}
                emailTemplateForm={emailTemplateForm}
                onAddEmailTemplateForm={onAddEmailTemplateForm}
            />
        </Fragment>
    )

}

export default Main