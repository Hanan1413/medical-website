import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // update form info
  const handleChange = (e) => {
    // Destructure the 'name' and 'value' from the target element (the input field that triggered the event)

    const { name, value } = e.target;

    // Update the formData state with the new input value while preserving the previous form data
    setFormData((prevFormData) => ({
      // Spread the previous form data to retain existing field values
      ...prevFormData,

      // Update the specific field based on the 'name' attribute of the input field
      [name]: value,
    }));
  };

  const handlSubmit = (e) => {
    e.preventDefult();
    console.log("form data", formData);

    //send Data to sever here
  };
  return (
    <div className="container pb-5" style={{ marginTop: '150px', marginBottom: '50px' }}
>
      <div className="row">
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://via.placeholder.com/500"
            alt="img"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">تواصل معنا</h2>
          <form onSubmit={handlSubmit}>
            <div className="mb-3 p-3">
              <label htmlFor="name">الأسم</label>
              <input
                type="text"
                className="form-control p-3 "
                id="name"
                name="user"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3  p-3">
              <label htmlFor="email" className="for-label">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="form-control  p-3"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  الهاتف
                </label>
                <input
                  type="tel"
                  className="form-control p-3"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">الرسالة</label>
                <textarea
                className="form-control"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                >

                </textarea>
              </div>
             
            </div>
            <button type="submit" className="btn btn-primary w-100 p-2">إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
