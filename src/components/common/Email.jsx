import React, { useRef, useState } from 'react';

// Component
export default function Email({ setContact }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState({
    name: '',
    email: '',
    message: '',
  });
  // console.log('value', { value });

  const changeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitInput = (e) => {
    e.preventDefault();

    console.log('submit', value);

    setValue({
      name: '',
      email: '',
      message: '',
    });
  };
  const handleInput = () => {
    // console.warn('call fun');
    console.log(inputRef.current);
    inputRef.current.value = 'Waleedabid0305@gmail.com';
    inputRef.current.style.color = 'red';
    inputRef.current.focus();
  };
  return (
    <>
      <div className="email_data">
        <div className="email_top">
          <i
            onClick={() => {
              setContact(false);
              document.body.style.overflow = 'visible';
            }}
            className="fa-solid fa-xmark"
          ></i>
          <h1>Contact Us</h1>
        </div>

        <form onSubmit={submitInput}>
          <label for="name">NAME:</label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={changeInput}
            placeholder="Your Name"
            ref={inputRef}
            required
          />

          <label for="email">EMAIL:</label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={changeInput}
            placeholder="Your Email"
            ref={inputRef}
            required
          />

          <label for="message">MESSAGE:</label>
          <textarea
            name="message"
            value={value.message}
            onChange={changeInput}
            rows="7"
            cols="50"
            required
          ></textarea>
          <div className="form_button">
            <button type="submit" onClick={handleInput}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// import emailjs from '@emailjs/browser';
// const form = useRef();

// const sendEmail = (e) => {
// e.preventDefault();

// emailjs.sendForm('service_y7l31kk', 'template_xm5uqxi', form.current, '7clBCwEawuD0w95MF').then(
// (result) => {
// console.log(result.text);
// form.current.reset();
// },
// (error) => {
// console.log(error.text);
// },
// );
// };
