import React, { useState, useRef } from "react";
import classes from "./EmailTemplateForm.module.css";
import MultiSelect from "../selects/MultiSelect";
import SingleSelect from "../selects/SingleSelect";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailTemplateForm = ({ onAddEmailTemplateForm, nonProfitUsersList, foundationUsersList }) => {
    const [enteredEmailTemplateSubject, setEnteredEmailTemplateSubject] = useState("");
    const [enteredEmailTemplateMessage, setEnteredEmailTemplateMessage] = useState("");

    const [emailForm, setEmailForm] = useState({
        sender: '',
        recipients: [],
        subject: '',
        message: ''
    })
    const handleFormData = (data) => {
        let input_name = data.target.name;
        let input_value = data.target.value;
        setEmailForm((prev) => {
            return {
                ...prev,
                [input_name]: input_value
            }
        })
    }
    const handleFormSelects = (data) => {
        if (Array.isArray(data)) {
            setEmailForm((prev) => {
                return {
                    ...prev,
                    ['recipients']: data
                }
            })
        } else {
            setEmailForm((prev) => {
                return {
                    ...prev,
                    ['sender']: data
                }
            })
        }
    }
    const submitEmailTemplateHandle = (e) => {
        e.preventDefault();
        onAddEmailTemplateForm({ enteredEmailTemplateSubject, enteredEmailTemplateMessage });
        try {
            emailjs.sendForm('service_rxg7vtd','template_ptapcfc', form.current, '4UhfqL6VzD5d8bv-z')
                .then((result) => {
                    console.log(result);
                    toast.success('Email sent successfully !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }, (error) => {
                    console.log('errr', error);
                    toast.error('Email sending failed !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                });
        } catch (err) {
            console.log("error", err)
        }
        setEnteredEmailTemplateSubject("");
        setEnteredEmailTemplateMessage("");
    };
    const form = useRef()
    console.log('emailFormData', emailForm)
    return (
        <div className={classes.input}>
            <h2 className="pb-3 text-left ml-16 font-semibold text-gray-600">Email Template Form</h2>
            <div>
                <SingleSelect
                    foundationUsersList={foundationUsersList}
                    callback={handleFormSelects}
                    emailForm={emailForm}
                />
            </div>
            <form ref={form} onSubmit={submitEmailTemplateHandle}>
                <div className="flex justify-between items-center">
                    <div>
                        <MultiSelect
                            nonProfitUsersList={nonProfitUsersList}
                            callback={handleFormSelects}
                            emailForm={emailForm}
                        />
                    </div>
                </div>
                <div>
                    <label className="text-blue-800 text-sm mt-2">Subject:</label>
                    <input name="subject"
                        onChange={(e) => handleFormData(e)}
                        value={emailForm.subject}
                        type="text"
                        required
                    />
                </div>
                    <div>
                        <label className="text-blue-800 text-sm">Message:</label>
                        <textarea
                            onChange={(e) => handleFormData(e)}
                            value={emailForm.message}
                            name='message'
                            type="text"
                            rows="3"
                            cols="34"
                            className="border-2 border-gray-300 text-sm p-2"
                            required
                        />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 ml-4 w-72 text-white font-bold py-2 px-4 border border-green-700 rounded w-15 h-10 mt-2" type="submit">
                        Send
                    </button>
            </form>
            <ToastContainer
                autoClose={2000}
            />
        </div>

    );
};

export default EmailTemplateForm;