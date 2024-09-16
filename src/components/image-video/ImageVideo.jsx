import React, { useState } from "react";
import Bed from "../../assets/video-bg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./image.module.css";
import Dental from "../../assets/denta-clinic.mp4";
import Modal from 'react-bootstrap/Modal';


const ImageVideo = ({props}) => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row m-auto pt-5 mt-5 mb-5 justify-content-center"
        style={{ marginBottom: "150px", position: "relative" }}
      >
        <div className="position-relative">
          <img
            className="w-100"
            src={Bed}
            style={{ position: "relative" }}
            alt="Bed"
          />
          <FontAwesomeIcon
            icon={faPlay}
            className={`${styles.waves} ${styles.wavesAnimation} position-absolute top-50 start-50 translate-middle fs-3`}
            onClick={() => setPlayVideo(!playVideo)}
            
          />
          {playVideo && (
         
         <Modal
         {...props}
          className="bg-transparent"
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         show={playVideo}
         onHide={() => setPlayVideo(false)}


       >
         <Modal.Header closeButton className="border-0" >
         
         </Modal.Header>
         <Modal.Body 
          >
    
             <div className={styles.content}>
             <video controls width="100%" height="100%" className={styles.video}>
                <source src={Dental} type="video/mp4" />
             </video>
             </div>
         </Modal.Body>
    
       </Modal>
            
          )}
        </div>

        <p className="col-12 col-md-6 p-4">
          <h3 className=" dark-text mb-5 ">من نحن</h3>
          نحن فريق متخصص يقدم خدمات متنوعة تهدف إلى تحسين صحتك ورفاهيتك. نحن
          ملتزمون بتقديم أعلى معايير الرعاية والتفاني في تلبية احتياجاتك
          الفردية. نحن نعمل بجد لضمان تقديم حلول صحية متكاملة وشاملة، حيث نحرص
          على استخدام أحدث الأساليب والموارد المتاحة لتحقيق أفضل النتائج.
        </p>
      </div>
    </>
  );
};

export default ImageVideo;
