import { resource } from "../schemas/locales";
import Input from "./Input";
import Select from "./Select";

const InvoiceDetails = ({
  projectDescription,
  invoiceDate,
  paymentTerms,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <div className="mb-6">
        <Input
          label={resource.inputLable.projectDesp}
          id={"projectDescription"}
          type={"text"}
          name={"projectDescription"}
          value={projectDescription}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
      <div className="flex -mx-2 mb-6">
        <div className="w-6/12 px-2 mb-4">
          <Input
            label={resource.inputLable.invoiceDate}
            id={"invoiceDate"}
            type={"date"}
            name={"invoiceDate"}
            value={invoiceDate}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="w-6/12 px-2 mb-4">
          <Select
            id="paymentTerms"
            label={resource.inputLable.paymentTerms}
            name="paymentTerms"
            error={errors.paymentTerms}
            touched={touched.paymentTerms}
            lists={[
              {
                name: "Net 10 days",
                value: "NET_10_DAYS",
              },
              {
                name: "Net 20 days",
                value: "NET_20_DAYS",
              },
              {
                name: "Net 30 days",
                value: "NET_30_DAYS",
              },
            ]}
            defaultValue="NET_30_DAYS"
            value={paymentTerms}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
