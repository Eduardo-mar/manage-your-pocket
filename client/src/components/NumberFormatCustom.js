import React from 'react';
import PropTypes from 'prop-types';
//Librerías NumberField
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator='.'
            decimalSeparator="'"
            allowedDecimalSeparators={['.',"'",',']}
            allowNegative={false}
            isNumericString
            suffix="€"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NumberFormatCustom;