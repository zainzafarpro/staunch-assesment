const Select = ({
  id,
  value,
  defaultValue,
  label,
  name,
  lists,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <>
      <label className="text-sm block w-full mb-2 text-[#344054]" htmlFor={id}>
        {label}
      </label>
      <select
        onChange={handleChange}
        onBlur={handleBlur}
        className="border-gray-300 rounded w-full border-[1px] focus:outline-none p-2 min-h-11"
        id={id}
        name={name}
        value={value ? value : defaultValue}
      >
        {lists.map((list) =>
          list.value === "default" ? (
            <option
              disabled
              defaultValue={list.value}
              key={list.value}
              value={list.name}
            >
              {list.name}
            </option>
          ) : (
            <option key={list.value} value={list.value}>
              {list.name}
            </option>
          )
        )}
      </select>
      {error && touched ? (
        <p className="text-red-600 text-xs my-1">{error}</p>
      ) : null}
    </>
  );
};

export default Select;
