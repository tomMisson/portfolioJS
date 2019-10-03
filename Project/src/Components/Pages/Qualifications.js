import React from 'react'
import QualificationItem from '../Qualifications/QualificationItem';

export default class Qualifications extends React.Component {
  
  state={
    qualifications:[
      {"_id":{"$oid":"5cb8f13d7e92601e2c8ba74c"},"Course":"Computer Science","Type":"A-level","Grade":"B","Issuer":"Eduquas","exam_date":"June 2018","Course code":"601/5302/7"},
      {"_id":{"$oid":"5cb8f3b4e8313d2597f94c83"},"Course":"Business","Type":"A-level","Grade":"C","Issuer":"AQA","exam_date":"June 2018","Course code":"601/4337/X"},
      {"_id":{"$oid":"5cb8f3c1e8313d2597f94c84"},"Course":"Mathematics","Type":"A-level","Grade":"C","Issuer":"AQA","exam_date":"June 2018","Course code":"100/3405/5"},
      {"_id":{"$oid":"5cb8f13d7e92601e2c8ba74c"},"Course":"Computer Science","Type":"AS-level","Grade":"C","Issuer":"Eduquas","exam_date":"June 2017","Course code":"601/5302/7"},
      {"_id":{"$oid":"5cb8f3b4e8313d2597f94c83"},"Course":"Business","Type":"AS-level","Grade":"B","Issuer":"AQA","exam_date":"June 2017","Course code":"601/4337/X"},
      {"_id":{"$oid":"5cb8f3c1e8313d2597f94c84"},"Course":"Mathematics","Type":"AS-level","Grade":"B","Issuer":"AQA","exam_date":"June 2017","Course code":"100/3405/5"},
      {"_id":{"$oid":"5cb8f57001df3b1e2c3eec23"},"Course":"Mathematics","Type":"GCSE","Grade":"A","Issuer":"Edexcel","exam_date":"June 2016","Course code":"500/7916/5"},
      {"_id":{"$oid":"5cb8f5c601df3b1e2c3eec24"},"Course":"Physics B","Type":"GCSE","Grade":"A*","Issuer":"OCR","exam_date":"June 2016","Course code":"600/1149/X"},
      {"_id":{"$oid":"5cb8f5fc01df3b1e2c3eec25"},"Course":"Biology B","Type":"GCSE","Grade":"A","Issuer":"OCR","exam_date":"June 2016","Course code":"600/1168/3"},
      {"_id":{"$oid":"5cb8f62801df3b1e2c3eec26"},"Course":"Chemistry B","Type":"GCSE","Grade":"A","Issuer":"OCR","exam_date":"June 2016","Course code":"600/1071/X"},
      {"_id":{"$oid":"5cb8f64b01df3b1e2c3eec27"},"Course":"Computing","Type":"GCSE","Grade":"A","Issuer":"OCR","exam_date":"June 2016","Course code":"500/8291/7"},
      {"_id":{"$oid":"5cb8f6ea01df3b1e2c3eec28"},"Course":"Religious Studies","Type":"GCSE","Grade":"A","Issuer":"WJEC","exam_date":"June 2016","Course code":"500/4585/4"},
      {"_id":{"$oid":"5cb8f71701df3b1e2c3eec29"},"Course":"English Language","Type":"GCSE","Grade":"B","Issuer":"WJEC","exam_date":"June 2016","Course code":"601/3156/1"},
      {"_id":{"$oid":"5cb8f81101df3b1e2c3eec2a"},"Course":"English Literature","Type":"GCSE","Grade":"B","Issuer":"WJEC","exam_date":"June 2015","Course code":"600/9507/6"},
      {"_id":{"$oid":"5cb8f92401df3b1e2c3eec2b"},"Course":"History","Type":"GCSE","Grade":"A","Issuer":"AQA","exam_date":"June 2016","Course code":"601/0269/X"},
      {"_id":{"$oid":"5cb8f93f01df3b1e2c3eec2c"},"Course":"French","Type":"GCSE","Grade":"B","Issuer":"AQA","exam_date":"June 2016","Course code":"500/4470/9"},
      {"_id":{"$oid":"5cb8fb7b7e92601e2c8ba751"},"Course":"V100","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VH00751"},
      {"_id":{"$oid":"5cb8fc3e01df3b1e2c3eec2d"},"Course":"V50","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VF10140"},
      {"_id":{"$oid":"5cb8fc5c01df3b1e2c3eec2e"},"Course":"V30","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":"VT07519"},
      {"_id":{"$oid":"5cb8fc7a01df3b1e2c3eec2f"},"Course":"V10","Type":"Accreditation","Issuer":"vInspired","Issue date":{"$date":{"$numberLong":"1507071600000"}},"Certificate number":""},
      {"_id":{"$oid":"5cb8fd7b01df3b1e2c3eec30"},"Course":"First aid","Type":"Accreditation","Issuer":"St John Ambulance","Issue date":{"$date":{"$numberLong":"1470178800000"}},"Expiry date":{"$date":{"$numberLong":"1564700400000"}},"Delegate number":"5699626","Certificate number":"1600242538"},
      {"_id":{"$oid":"5cb901d18b3957274c11bbd7"},"Course":"Fundamentals of Digital Marketing","Type":"Accreditation","Issuer":"Open university & Google","Issue date":{"$date":{"$numberLong":"1547938800000"}},"Certificate number":"7KB 6RC HDV"}
    ]
  };
  
  render() {
    return (
      <main>
        <h1>Qualifications</h1>
        <ul className="qualifications">
          {
            this.state.qualifications.map((qual) =>
                <QualificationItem qualification={qual}></QualificationItem>
            )
          }
        </ul>
      </main>
    )
  }
}