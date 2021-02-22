import React from "react";
import s from "./TheftMessage.module.css";
import { Form, Field } from "react-final-form";
import { Element } from "../../common/FormControls/FormControls.jsx";
import {
  composeValidators,
  maxLength,
  required,
  letters,
} from "../../utils/validators/validators.js";

import "../../App.css";

const Input = Element("input");
const Textarea = Element("textarea");

const TheftMessageForm = ({ onSubmit, officers }) => {
  //  officerId
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.string}>
            <label>ФИО:</label>
            <Field
              component={Input}
              className="input"
              placeholder="Фамилия Имя Отчество"
              type="text"
              name="ownerFullName"
              validate={composeValidators(required, letters)}
            />
          </div>
          <div className={s.string}>
            <label>Номер лицензии: </label>
            <Field
              component={Input}
              className="input"
              placeholder="№ лицензии"
              type="text"
              name="licenseNumber"
              validate={composeValidators(required, maxLength(30))}
            />
          </div>
          <div className={s.string}>
            <div className={s.halfString}>
              <label>Цвет:</label>
              <Field
                component={Input}
                className={s.color}
                type="color"
                name="color"
                initialValue="#ffffff"
                validate={composeValidators(required)}
              />
            </div>
            <div className={s.halfString}>
              <label>Тип:</label>
              <label className={s.radio}>
                <Field
                  component="input"
                  className={s.radioDot}
                  type="radio"
                  name="type"
                  value="sport"
                  validate={composeValidators(required)}
                />{" "}
                Горный
              </label>

              <label className={s.radio}>
                <Field
                  component="input"
                  className={s.radioDot}
                  type="radio"
                  name="type"
                  value="general"
                  validate={composeValidators(required)}
                />{" "}
                Прогулочный
              </label>
            </div>
          </div>
          <div className={s.string}>
            <label>Ответственный сотрудник:</label>
            <Field name="officer" component="select" className="input">
              <option />

              {officers.length > 0
                ? officers.map((officer) => {
                    if (officer.approved) {
                      return (
                        <option value={officer._id} key={officer._id}>
                          {officer.firstName} {officer.lastName}
                        </option>
                      );
                    }
                  })
                : ""}
            </Field>
          </div>
          <label>Описание:</label>
          <Field
            component={Textarea}
            name="description"
            className={s.textarea}
            placeholder="Описание"
            validate={composeValidators(required, maxLength(200))}
          />
          <div className={s.buttons}>
            <button
              className={`${s.submit} button`}
              disabled={submitting || pristine}
            >
              Отправить
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
