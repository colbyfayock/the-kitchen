import styles from './Select.module.scss';

const Select = ({ id, name, label, options, multiple }) => {
  return (
    <div className={`ingredient ${styles.select}`}>
      <label htmlFor={id}>{ label }</label>
      <select id={id} name={name} multiple={multiple}>
        {options.map(({ label, value, ...rest }) => {
          return (
            <option key={value} value={value} {...rest}>
              { label }
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default Select;