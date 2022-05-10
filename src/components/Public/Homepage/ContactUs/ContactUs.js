import React, { useState } from 'react'
import InputElement from '../../../../constant/public/Input/InputElement'
import './contact.scss'
import contact from '../../../../assets/png/contact-img.png'
import contact2x from '../../../../assets/png/contact-img@2x.png'
import axios from 'axios'
import * as yup from 'yup'
import { Formik, useFormik } from 'formik'
import FormList from 'antd/lib/form/FormList'

const ContactUs = () => {
  const Formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      question: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email.').required('Email is Required'),
    }),
    onSubmit: (values) => {
      debugger
    },
  })
  const { setFieldValue } = Formik
  const handleSubmit = () => {
    axios
      .post(`https://uplio-newsletter.herokuapp.com/api/auth/register`, {
        name: Formik.values.name,
        email: Formik.values.email,
        question: Formik.values.question,
      })
      .then((res) => {
        setFieldValue('name', '')
        setFieldValue('email', '')
        setFieldValue('question', '')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className="section contact">
      <div className="contact-wrapper">
        <div className="container">
          <div className="contact-content">
            <form className="contact-form">
              <img
                className="contact-form__img"
                width="432"
                src={contact}
                srcSet={`${contact} 1x, ${contact2x} 2x`}
                alt=""
              />
              <h2 className="title title_size-m contact-form__title">
                Stay in touch
              </h2>
              <p className="contact-form__subtitle">
                Contact us and we will answer any questions you have.
              </p>
              <div className="contact-inputs">
                <InputElement
                  className="contact-inputs__input"
                  type="text"
                  name="name"
                  width="100%"
                  value={Formik.values.name}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  placeholder="Name"
                  required="true"
                />
                <InputElement
                  name="email"
                  className="contact-inputs__input"
                  type="text"
                  width="100%"
                  placeholder="Email"
                  required="true"
                  value={Formik.values.email}
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
                <InputElement
                  name="question"
                  className="contact-inputs__input contact-inputs__input_long"
                  type="text"
                  width="100%"
                  placeholder="Question"
                  required="true"
                  value={Formik.values.question}
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
              </div>
              <div className="contact-form__submit-wrapper">
                <button
                  onClick={() => handleSubmit()}
                  className="button button-arrow contact-form__submit"
                >
                  Send
                  <svg
                    width="57"
                    height="16"
                    viewBox="0 0 57 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.6109 8.70711C57.0014 8.31658 57.0014 7.68342 56.6109 7.29289L50.2469 0.928932C49.8564 0.538408 49.2233 0.538408 48.8327 0.928932C48.4422 1.31946 48.4422 1.95262 48.8327 2.34315L54.4896 8L48.8327 13.6569C48.4422 14.0474 48.4422 14.6805 48.8327 15.0711C49.2233 15.4616 49.8564 15.4616 50.2469 15.0711L56.6109 8.70711ZM0 9H55.9038V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
