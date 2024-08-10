import Input from "./Input";
import deleteIcon from "../images/delete.svg";
import { resource } from "../schemas/locales";

const AddItems = ({
  handleChange,
  handleBlur,
  errors,
  values,
  setFieldValue,
  touched,
}) => {
  const handleNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: values.items.length + 1,
      itemName: "",
      qty: "",
      price: "",
      total: "",
    };

    setFieldValue("items", [...values.items, newItem]);
  };

  const deleteItem = (index) => {
    const updatedItems = values.items.filter((item, i) => i !== index);

    setFieldValue("items", updatedItems);
  };

  const handleItemCalculation = (e, index) => {
    handleBlur(e);

    const items = [...values.items];

    if (items[index].qty && items[index].price) {
      const total = items[index].qty * items[index].price;
      setFieldValue(`items.${index}.total`, total);
    }
  };

  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold mb-3">
        {resource.text.itemList}
      </h2>
      {values.items.map((item, index) => (
        <div key={item.id} className="flex -mx-2 md:flex-nowrap flex-wrap">
          <div className="w-full md:w-2/5 px-2 mb-4">
            <Input
              label={resource.inputLable.itemName}
              id={`items.${index}.itemName`}
              type={"text"}
              name={`items.${index}.itemName`}
              value={values.items[index].itemName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.items?.[index]?.itemName}
              touched={touched.items?.[index]?.itemName}
            />
          </div>
          <div className="w-1/4 md:w-1/6 px-2 mb-4">
            <Input
              label={resource.inputLable.qty}
              id={`items.${index}.qty`}
              type={"number"}
              name={`items.${index}.qty`}
              value={values.items[index].qty}
              handleChange={handleChange}
              handleBlur={(e) => handleItemCalculation(e, index)}
              error={errors.items?.[index]?.qty}
              touched={touched.items?.[index]?.qty}
            />
          </div>
          <div className="w-1/4 md:w-1/6 px-2 mb-4">
            <Input
              label={resource.text.price}
              id={`items.${index}.price`}
              type={"number"}
              name={`items.${index}.price`}
              value={values.items[index].price}
              handleChange={handleChange}
              handleBlur={(e) => handleItemCalculation(e, index)}
              error={errors.items?.[index]?.price}
              touched={touched.items?.[index]?.price}
            />
          </div>
          <div className="w-1/4 md:w-1/6 px-2 mb-4">
            <Input
              readonly={true}
              disabled={true}
              label={resource.inputLable.total}
              id={`items.${index}.total`}
              type={"number"}
              name={`items.${index}.total`}
              value={values.items[index].total}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.items?.[index]?.total}
            />
          </div>
          <div className="w-1/4 md:w-1/12 text-center px-2 mb-4">
            <button
              type="button"
              className="mt-[35px] hover:opacity-70"
              onClick={() => deleteItem(index)}
            >
              <img src={deleteIcon} alt={resource.text.deleteItem} />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleNewItem}
        className="bg-[#7F56D9] w-full text-white rounded p-2 hover:bg-purple-600"
      >
        {resource.text.addNewItem}
      </button>
    </>
  );
};

export default AddItems;
