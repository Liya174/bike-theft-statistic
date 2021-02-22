import React from "react";
import { Form, Field } from "react-final-form";
import { Element } from "../../common/FormControls/FormControls.jsx";
import {
  composeValidators,
  maxLength,
  required,
  emailType,
} from "../../utils/validators/validators.js";

import s from "./UserCreate.module.css";
import "../../App.css";

const Input = Element("input");

const UserCreateForm = ({ onSubmit, buttonName, currentOfficer }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className="label">
            Имя:
            <Field
              initialValue={currentOfficer ? currentOfficer.firstName : ""}
              component={Input}
              className="input"
              placeholder="Имя"
              type="text"
              name="firstName"
              validate={composeValidators(required, maxLength(30))}
            />
          </label>
          <label className="label">
            Фамилия:
            <Field
              initialValue={currentOfficer ? currentOfficer.lastName : ""}
              component={Input}
              className="input"
              placeholder="Фамилия"
              type="text"
              name="lastName"
              validate={composeValidators(required, maxLength(30))}
            />
          </label>
          <label className="label">
            Email:
            <Field
              initialValue={currentOfficer ? currentOfficer.email : ""}
              component={Input}
              className="input"
              placeholder="email"
              type="text"
              name="email"
              validate={composeValidators(required, emailType)}
            />
          </label>
          <label className="label">
            Пароль:
            <Field
              component={Input}
              className="input"
              placeholder="пароль"
              type="password"
              name="password"
              validate={required}
            />
          </label>
          <label className="label">
            Повторите пароль:
            <Field
              component={Input}
              className="input"
              placeholder="пароль"
              type="password"
              name="repassword"
              validate={required}
            />
          </label>

          <div className={s.buttons}>
            <button
              className={`${s.submit} button`}
              disabled={submitting || pristine}
            >
              {buttonName}
            </button>
            <button
              className={`${s.submit} button`}
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Сбросить
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default UserCreateForm;
