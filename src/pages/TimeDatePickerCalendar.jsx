import { DatePicker, TimePicker,Calendar, CalendarProvider } from "zaman";
import { DefaultTypography } from "../components/Typography";
import { useState,useRef,useEffect } from "react";



const TimeDatePickerCalendar = ({props}) => {

    const [calendarValue, setCalendarValue] = useState(new Date())

    return ( 
    <>
   
    <div style={{
        display: "flex",
        flexDirection: "row-reverse",
        
        
    }}>     
    
    <div style={{
        direction: "rtl",
        marginRight: "150px",
        marginTop: "50px",
        
    }}>
    <div style={{
        marginBottom: "12px",
        
    }}><DefaultTypography>انتخاب تاریخ  :</DefaultTypography></div>
    <DatePicker 
    inputClass="Date"
    direction="ltr"
    position="center"
    onChange={(e) => console.log(e.value)} />
    </div>
    <div style={{
        direction: "rtl",
        marginRight: "150px",
        marginTop: "50px",
        
    }}>
    <div style={{
        marginBottom: "12px",
        
    }}><DefaultTypography>انتخاب بازه زمانی  :</DefaultTypography></div>
    <DatePicker 
    inputClass="Date"
    direction="ltr"
    position="center"
    onChange={(e) => console.log(e.value)} range />
    </div>
    <div style={{
        direction: "rtl",
        marginRight: "150px",
        marginTop: "50px",
        
    }}>
    <div style={{
        marginBottom: "12px",
        
    }}><DefaultTypography>انتخاب زمان  :</DefaultTypography></div>
    <TimePicker
      inputClass="Time"
      direction="ltr"
      position="center"
      onChange={(e) => console.log(e.hour, e.minute, e.timeConvention)}
    />

    </div>
    <div style={{
        direction: "rtl",
        marginRight: "200px",
        marginTop: "50px",
        
    }}>
    <div style={{
        marginBottom: "12px",
        
    }}><DefaultTypography>تقویم</DefaultTypography></div>
    <CalendarProvider>
      <Calendar
        defaultValue={calendarValue}
        onChange={(e) => setCalendarValue(new Date(e.value))}
      />
    </CalendarProvider>
    </div>
    </div>
    </>
    )
}

export default TimeDatePickerCalendar;