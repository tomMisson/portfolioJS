import React from 'react'
import PropTypes from 'prop-types';

export class QualificationItem extends React.Component {

  render() {
    return (
      <li>{this.props.qualification.Course}</li>  
    )
  }
}

//PropTypes
QualificationItem.propType = 
{
    Qualification: PropTypes.object.isRequired
}

export default QualificationItem
