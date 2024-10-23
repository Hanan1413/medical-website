import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Days from "../../components/days/Days";
// import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import "./booking.css";
import { TextField, MenuItem } from "@mui/material";
import AppointmentContext from "../../context/Appointmentcontext";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';

// import  doctors  from "../../data/data";

//   const [value, setValue] = React.useState(dayjs("2022-04-17"));
//   const [showDay, setShowDays] = useState(false);

//   const handleDate = (newValue) =>{
//     setValue(newValue)
//     console.log(    newValue.format(("YYYY-MM-DD"))
//   )

//   }
//   return (
//     <div className="d-flex  flex-column  flex-sm-column-reverse gap-5  flex-md-row justify-content-center fs-1 col-12 h-100" style={{marginTop:'100px', marginBottom:'100px'}}>

//          <CSSTransition
//         in={showDay}
//         timeout={500}
//         classNames="fade"
//         unmountOnExit
//       >
//            {showDay && <Days />
//       }
//       </CSSTransition>

//       {/* <div className='col-6'> */}
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer
//           components={["DateCalendar", "DateCalendar"]}
//           style={{ fontSize: "2rem" }}
//         >
//           <DemoItem label="Controlled calendar" style={{ fontSize: "20rem" }}>
//             <DateCalendar
//               value={value}
//               onChange={handleDate}
//               onClick={() => setShowDays(true)}

//               sx={{
//                 "& .MuiTypography-root": {
//                   fontSize: "1rem", // Adjust font size of text elements
//                 },
//                 "& .MuiPickersDay-root": {
//                   fontSize: "1.5rem", // Adjust font size of day numbers if needed
//                 },
//               }}
//             />
//           </DemoItem>
//         </DemoContainer>
//       </LocalizationProvider>
//       {/* </div> */}
//     </div>
//   );
// };

const BookingForm = ({ onSubmit }) => {
  const [isSubmiting, setISSubmiting] = useState(false);
  const { state, dispatch } = useContext(AppointmentContext);
  console.log(state.doctors);

  const times = ["10AM", "11:00AM", "12PM"];

  const handleSubmit = () => {
    setISSubmiting(true);
    toast("لقد تم تأكيد موعدك سوف يتم التواصل معك قريباً", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch({ type: "RESET_APPOINTMENT" });

    //after 6000seconds setISSubmiting to false
    setTimeout(() => {

      setISSubmiting(false);
    }, 6000);
  };

  return (
    <div className="container m-auto  p-5 w-75">
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* حقل اسم المريض */}
      {/* <ToastContainer position="top-right" size='100px' autoClose={3000} /> */}

      <TextField
        label="الأسم"
        value={state.patientName}
        onChange={(e) =>
          dispatch({ type: "SET_PATIENT_NAME", payload: e.target.value })
        }
        fullWidth
        margin="normal"
      />

      <TextField
        label="رقم الهاتف"
        type="number"
        fullWidth
        value={state.number}
        onChange={(e) =>
          dispatch({ type: "SET_NUMBER", payload: e.target.value })
        }
      />
      {/* قائمة الأطباء */}
      <TextField
        label="اسم الطبيب"
        select
        value={state.doctorName}
        onChange={(e) =>
          dispatch({ type: "SET_DOCTOR_NAME", payload: e.target.value })
        }
        fullWidth
        margin="normal"
      >
        {state.doctors.map((doctor) => (
          <MenuItem key={doctor.id} value={doctor.name}>
            {doctor.name}
          </MenuItem>
        ))}
      </TextField>

      {/* زر الموافقة */}
      {/* <button >
        موافق
      </button> */}
      <Button  className="p-3 fs-5 mt-5 " variant="primary" as="input" type="button" value="موافق" onClick={handleSubmit} disabled={isSubmiting} />

    </div>
  );
};

export default BookingForm;
