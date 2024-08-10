import { resource } from "../schemas/locales";
import Input from "./Input";
import Select from "./Select";

export default function BillTo({
  errors,
  touched,
  handleBlur,
  handleChange,
  clientName,
  clientEmail,
  clientCity,
  clientCountry,
  clientAddress,
  clientPostalCode,
}) {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold mb-3">
        {resource.title.billTo}
      </h2>
      <div className="flex -mx-2">
        <div className="w-6/12 px-2 mb-4">
          <Input
            label={resource.inputLable.clientName}
            id={"clientName"}
            type={"text"}
            name={"clientName"}
            value={clientName}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.clientName}
            touched={touched.clientName}
          />
        </div>
        <div className="w-6/12 px-2 mb-4">
          <Input
            label={resource.inputLable.clientEmail}
            id={"clientEmail"}
            type={"email"}
            name={"clientEmail"}
            value={clientEmail}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.clientEmail}
            touched={touched.clientEmail}
          />
        </div>
      </div>
      <div className="flex -mx-2 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-4/12 px-2 mb-4">
          <Select
            id="clientCountry"
            label={resource.inputLable.clientCountry}
            name="clientCountry"
            error={errors.clientCountry}
            touched={touched.clientCountry}
            lists={[
              {
                name: resource.inputLable.selectCountry,
                value: "default",
              },
              {
                name: "USA",
                value: "USA",
              },
              {
                name: "UK",
                value: "United kingdom",
              },
              {
                name: "Canada",
                value: "Canada",
              },
            ]}
            defaultValue={resource.inputLable.selectCountry}
            value={clientCountry}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="w-6/12 md:w-4/12 px-2 mb-4">
          <Input
            label={resource.inputLable.clientCity}
            id={"clientCity"}
            type={"text"}
            name={"clientCity"}
            value={clientCity}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.clientCity}
            touched={touched.clientCity}
          />
        </div>
        <div className="w-6/12 md:w-4/12 px-2 mb-4">
          <Input
            label={resource.inputLable.cPostCode}
            id={"clientPostalCode"}
            type={"number"}
            name={"clientPostalCode"}
            value={clientPostalCode}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.clientPostalCode}
            touched={touched.clientPostalCode}
          />
        </div>
      </div>
      <div className="w-full mb-8">
        <Input
          label={resource.inputLable.cAddress}
          id={"clientAddress"}
          type={"text"}
          name={"clientAddress"}
          value={clientAddress}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.clientAddress}
          touched={touched.clientAddress}
        />
      </div>
    </>
  );
}
