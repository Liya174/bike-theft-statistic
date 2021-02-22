import React from "react";
import s from "./TheftMessage.module.css";
import { Form, Field } from "react-final-form";
import { Element } from "../../common/FormControls/FormControls.jsx";
import {
  composeValidators,
  maxLength,
  required,
  emailType,
} from "../../utils/validators/validators.js";

import "../../App.css";

const Input = Element("input");

const TheftMessageForm = ({ onSubmit }) => {
  // {status: "new",
  // date: "", //	Date
  // licenseNumber: "",
  // color: "",
  // type: "",
  // ownerFullName: "",
  // officer: "",
  // createdAt: "",
  // updateAt: "",
  // clientId: "",
  // description: "",
  // resolution: ""}

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className="label">
            Имя:
            <Field
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

export default TheftMessageForm;
