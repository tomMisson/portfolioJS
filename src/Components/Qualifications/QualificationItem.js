import React from 'react'
import PropTypes from 'prop-types';

export class QualificationItem extends React.Component {

  render() {
    if(this.props.qualification.Grade === undefined)
    {
      return (
        <li id={this.props.qualification._id.$oid} className="qualification">{this.props.qualification.Type} for {this.props.qualification.Course}</li>
      )
    }
    else{
      return (
        <li id={this.props.qualification._id.$oid} className="qualification">{this.props.qualification.Type} {this.props.qualification.Course} - {this.props.qualification.Grade}</li>
      )
    }
  }
}

//PropTypes
QualificationItem.propType = 
{
    Qualification: PropTypes.object.isRequired
}

export default QualificationItem
