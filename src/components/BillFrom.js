import { resource } from "../schemas/locales";
import Input from "./Input";
import Select from "./Select";

const BillFrom = ({
  company_name,
  company_email,
  country,
  city,
  postal_code,
  street_address,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold mb-3">
        {resource.title.billFrom}
      </h2>
      <div className="flex -mx-2">
        <div className="w-6/12 px-2 mb-4">
          <Input
            label={resource.inputLable.companyName}
            id={"companyName"}
            type={"text"}
            name={"company_name"}
            value={company_name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.company_name}
            touched={touched.company_name}
          />
        </div>
        <div className="w-6/12 px-2 mb-4">
          <Input
            label={resource.inputLable.companyEmail}
            id={"companyEmail"}
            type={"email"}
            name={"company_email"}
            value={company_email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.company_email}
            touched={touched.company_email}
          />
        </div>
      </div>
      <div className="flex -mx-2 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-4/12 px-2 mb-4">
          <Select
            id="country"
            label={resource.inputLable.country}
            name="country"
            error={errors.country}
            touched={touched.country}
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
            value={country}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="w-6/12 md:w-4/12 px-2 mb-4">
          <Input
            label={resource.inputLable.city}
            id={"city"}
            type={"text"}
            name={"city"}
            value={city}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.city}
            touched={touched.city}
          />
        </div>
        <div className="w-6/12 md:w-4/12 px-2 mb-4">
          <Input
            label={resource.inputLable.postalCode}
            id={"postalCode"}
            type={"number"}
            name={"postal_code"}
            value={postal_code}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.postal_code}
            touched={touched.postal_code}
          />
        </div>
      </div>
      <div className="mb-8">
        <Input
          label={resource.inputLable.streetAddress}
          id={"address"}
          type={"text"}
          name={"street_address"}
          value={street_address}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.street_address}
          touched={touched.street_address}
        />
      </div>
    </>
  );
};

export default BillFrom;
