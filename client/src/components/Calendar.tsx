import {useEffect, useState} from "react";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  WorkWeek,
  EventSettingsModel,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import {scheduleDataFormat, setAppointmentColors, getSubjects} from "../helpers";
import "../styles/Calender.css";
import axios from "axios";

interface Props {
  scheduleData: {
    start: number;
    end: number;
    description: string;
    remarks: string;
    title: string;
    instructor: string;
    sroom: string;
  }[];
}
function Calendar(this: any, props: Props) {



  const formattedScheduleData = scheduleDataFormat(props.scheduleData);
const [subjectColors, setSubjectColors] = useState<any>([])

  const localData: EventSettingsModel = {
    dataSource: formattedScheduleData,
    allowAdding: false,
    allowEditing: false,
    allowDeleting: false,
  };


  const getSubjects = () :any => {
    axios.get("http://localhost:4959/subjects").then(res =>{
      setSubjectColors(res.data)
  }).catch(err => console.log(err))
  
  }
  

  async function onEventRendered(args: any) {
    var scheduleObj: any = (document.querySelector(".e-schedule") as any)
      .ej2_instances[0];

    getSubjects()
    console.log(subjectColors)
    setAppointmentColors(args, scheduleObj, subjectColors);
    if (scheduleObj.currentView == "Day")
      args.element.classList.add("daySelected");
  }




  
  return (
    <ScheduleComponent
      eventSettings={localData}
      currentView="WorkWeek"
      workHours={{
        highlight: true,
        start: "08:00",
        end: "19:00",
      }}
      eventRendered={onEventRendered.bind(this)}
    >
      <ViewsDirective>
        <ViewDirective option="Day" startHour="08:00" endHour="21:00" />
        <ViewDirective option="WorkWeek" startHour="08:00" endHour="21:00" />
        <ViewDirective option="Month" showWeekend={false} />
        <ViewDirective option="Agenda" />
      </ViewsDirective>
      <Inject services={[Day, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default Calendar;
