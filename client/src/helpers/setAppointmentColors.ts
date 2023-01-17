import axios from "axios";
import * as subjects from "../data/subjects.json";


async function setAppointmentColors(args: any, scheduleObj: any, subjectColors : any) {

  subjectColors.map((e:any,i:any)=>{
      e.name = e.name.replace(/VS\s/, '')
      args.data.Subject.includes(e.name)
      ? scheduleObj.currentView == "Agenda"
        ? (args.element.children[0].style.borderColor = e.color)
        : (args.element.style.backgroundColor = e.color)
      : null;
    })

} 
   




export default setAppointmentColors;
