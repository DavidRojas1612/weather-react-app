import React from 'react';
import './ForecasItem.scss'
import PropTypes from 'prop-types';

const ForecasItem = ({weekDay}) => {
    return (
        <div>
            hola soy un forecasitem
        </div>
    );
};

ForecasItem.propTypes = {
    weekDay: PropTypes.string.isRequired
};

export default ForecasItem;