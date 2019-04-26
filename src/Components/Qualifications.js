import React from 'react';
import QualificationItem from './QualificationItem';
import PropTypes from 'prop-types';

class Qualifications extends React.Component {

    render(){
        return(
            this.props.qualifications.map((qualification) => (
            <QualificationItem qualification={qualification} key={qualification._id.$oid}/>
        )));
    };
}

//PropTypes
Qualifications.propType = 
{
    QualificationItem: PropTypes.array.isRequired
}

export default Qualifications;
