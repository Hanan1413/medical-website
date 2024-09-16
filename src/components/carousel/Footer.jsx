import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faConciergeBell, faBriefcase, faQuestionCircle, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className=" text-light py-4 " style={{background:'#1A76D1'}}>
      <div className="container">
        <div className="row">
        

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h4>روابط سريعة</h4>
            <ul className="list-unstyled d-flex flex-column gap-3 text-right justify-content-centr">
              <li className='ml-5' ><a  className='text-light ' href="#"><FontAwesomeIcon icon={faHome} /> الرئيسية</a></li>
              <li><a  className='text-light' href="#"><FontAwesomeIcon icon={faUser} /> من نحن</a></li>
              <li><a  className='text-light' href="#"><FontAwesomeIcon icon={faConciergeBell} /> خدماتنا</a></li>
              <li><a  className='text-light' href="#"><FontAwesomeIcon icon={faBriefcase} /> حالاتنا</a></li>
              <li><a  className='text-light' href="#"><FontAwesomeIcon icon={faQuestionCircle} /> أسئلة شائعة</a></li>
              <li><a  className='text-light' href="#"><FontAwesomeIcon icon={faPhone} /> اتصل بنا</a></li>
            </ul>
          </div>

          {/* Open Hours Section */}
          <div className="col-md-4">
            <h4>ساعات العمل</h4>
            <p className='fs-6 my-4 text-light'>نحن هنا لخدمتكم خلال أوقات العمل المحددة أدناه. يرجى ملاحظة أن أوقات العمل قد تختلف في أيام العطل الرسمية أو المناسبات الخاصة. لمزيد من المعلومات، لا تترددوا في الاتصال بنا.</p>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faClock} /> الإثنين - الجمعة: 8.00 - 20.00</li>
              <li><FontAwesomeIcon icon={faClock} /> السبت: 9.00 - 18.30</li>
              <li><FontAwesomeIcon icon={faClock} /> الأحد - الخميس: 9.00 - 15.00</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-4">
            <h4>النشرة الإخبارية</h4>
            <p className='text-light opacity-3 fs-6'>اشترك في نشرتنا الإخبارية للحصول على أحدث أخبارنا في بريدك الإلكتروني.</p>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">البريد الإلكتروني:</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-light text-primary">اشترك</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
