import classes from "./Forms.module.css";
import UsersMetaData from "../usersMetaData/UsersMetaData";
import EmailTemplateForm from "../emailTempForm/EmailTemplateForm";

const Forms = ({ onAddNonProfitUser, onAddFoundationUser, onAddEmailTemplateForm, foundationUsersList, nonProfitUsersList }) => {

    return (
        <div className={classes.usersData}>
            <UsersMetaData
                onAddNonProfitUser={onAddNonProfitUser}
                onAddFoundationUser={onAddFoundationUser}
                onAddEmailTemplateForm={onAddEmailTemplateForm} />
                <div className="mr-52">
                    <img src='temelioLogo.webp'/>
                </div>

            <EmailTemplateForm onAddEmailTemplateForm={onAddEmailTemplateForm}
                nonProfitUsersList={nonProfitUsersList}
                foundationUsersList={foundationUsersList} />
        </div>
    );
};

export default Forms;
