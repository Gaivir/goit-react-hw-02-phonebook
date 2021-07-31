import PropTypes from 'prop-types';
// import styles from './Filter.module.css';

const Filter = ({value, changFilter}) => (
    <label>Find contacts by name
        <input type="text" value={value}
        onChange ={changFilter}/>

    </label>
)

Filter.propTypes = {
value: PropTypes.string.isRequired,
changFilter: PropTypes.func.isRequired,
};

export default Filter;