import './outlinedButton.scss';
import PropTypes from 'prop-types';

const OutlinedButton = ({backgroundColor, text, ...props}) => {
    return(
        <div>
            <label className='outlined_btn' style={backgroundColor && {backgroundColor}} {...props}>
                { text }
            </label>
        </div>
        
    )
}

OutlinedButton.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
};

OutlinedButton.defaultProps = {
    text: "Button",
    backgroundColor: '$primary-main',
};

export default OutlinedButton;