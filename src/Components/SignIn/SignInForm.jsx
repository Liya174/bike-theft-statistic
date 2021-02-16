import React from "react";
import { Form, Field } from "react-final-form";
import { Element } from "../../common/FormControls/FormControls.jsx";
import {
  composeValidators,
  maxLength,
  required,
  emailType,
} from "../../utils/validators/validators.js";

import s from "./SignIn.module.css";
import "../../App.css";

const Input = Element("input");

const SignInForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form className={s.form} onSubmit={handleSubmit}>
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
          <button
            className={`${s.submit} button`}
            disabled={submitting || pristine}
          >
            Войти
          </button>
        </form>
      )}
    />
  );
};

export default SignInForm;
