const Input = ({
  id,
  label,
  type,
  name,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  readonly,
  disabled,
}) => {
  return (
    <>
      <label className="text-sm block w-full mb-2 text-[##344054]" htmlFor={id}>
        {label}
      </label>
      <input
        disabled={disabled}
        readOnly={readonly}
        className="border-gray-300 rounded w-full border-[1px] focus:outline-none p-2 min-h-11"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched ? (
        <p className="text-red-600 text-xs my-1">{error}</p>
      ) : null}
    </>
  );
};

export default Input;
