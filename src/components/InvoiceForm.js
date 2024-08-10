import { useFormik } from "formik";
import Preview from "./Preview";
import { invoiceSchema } from "../schemas";
import { resource } from "../schemas/locales";
import AddItems from "./AddItems";
import toast, { Toaster } from "react-hot-toast";
import Icon from "./Icon";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import CTAs from "./CTAs";
import InvoiceDetails from "./InvoiceDetails";

const InvoiceForm = () => {
  const notifySuccess = () =>
    toast(
      <div className="block w-full text-left text-sm">
        <strong className="block font-semibold">
          Invoice created successfully!
        </strong>
        Your invoice has been created.
      </div>,
      {
        style: { padding: "16px" },
        icon: <Icon />,
        position: "top-right",
        duration: 4000,
      }
    );

  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const initialValues = {
    company_name: "",
    company_email: "",
    country: "",
    city: "",
    postal_code: "",
    street_address: "",
    clientName: "",
    clientEmail: "",
    clientCountry: "",
    clientCity: "",
    clientAddress: "",
    clientPostalCode: "",
    projectDescription: "",
    invoiceDate: formattedToday,
    paymentTerms: "",
    items: [
      {
        id: 1,
        itemName: "",
        qty: "",
        price: "",
        total: "",
      },
    ],
  };

  const {
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    setFieldValue,
    values,
  } = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: invoiceSchema,
    onSubmit: (values, action) => {
      const query = `
        mutation CreateInvoice($input: CreateInvoiceInput!) {
          createInvoice(input: $input) {
            id
            invoiceDate
            paymentTerms
            projectDescription
            subTotal
            tax
            totalAmount
            billingFrom {
              companyEmail
              companyName
              id
              billingFromAddress {
                city
                country
                postalCode
                streetAddress
              }
            }
            billingTo {
              clientEmail
              clientName
              id
              billingToAddress {
                city
                country
                postalCode
                streetAddress
              }
            }
            items {
              id
              name
              price
              quantity
              totalPrice
            }
          }
        }
      `;

      const variables = {
        input: {
          clientMutationId: "1",
          createInvoiceAttributes: {
            invoiceDate: values.invoiceDate,
            paymentTerms: values.paymentTerms,
            projectDescription: values.projectDescription,
            billingToAttributes: {
              clientName: values.clientName,
              clientEmail: values.clientEmail,
              billingToAddressAttributes: {
                streetAddress: values.clientAddress,
                city: values.city,
                country: values.country,
                postalCode: values.clientPostalCode.toString(),
              },
            },
            billingFromAttributes: {
              companyName: values.company_name,
              companyEmail: values.company_email,
              billingFromAddressAttributes: {
                streetAddress: values.street_address,
                city: values.city,
                country: values.country,
                postalCode: values.postal_code.toString(),
              },
            },
            itemAttributes: values.items.map((item) => ({
              name: item.itemName,
              price: item.price,
              quantity: item.qty,
            })),
          },
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      };
      fetch(
        "https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql",
        options
      )
        .then((response) => {
          if (response.ok) {
            notifySuccess();
            response.json();
          }
        })
        .then((data) => {
          action.resetForm();
        })
        .catch(() => toast.error("Error occured while submitting the form."));
    },
  });

  return (
    <>
      <Toaster />
      <form className="p-6" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl md:text-3xl mb-2 font-semibold">
              {resource.title.newInvoice}
            </h1>
            <p className="text-sm md:text-md text-gray-400">
              {resource.title.subTitle}
            </p>
          </div>
          <CTAs />
        </div>
        <div className="flex -mx-2 flex-wrap">
          <div className="w-full lg:w-6/12 rounded px-2 lg:mb-0 mb-8">
            <div className="border-[#D0D5DD] border-[1px] rounded-3xl md:py-8 md:px-6 p-4">
              <BillFrom
                company_name={values.company_name}
                company_email={values.company_email}
                country={values.country}
                city={values.city}
                postal_code={values.postal_code}
                street_address={values.street_address}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              <BillTo
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                clientName={values.clientName}
                clientEmail={values.clientEmail}
                clientCountry={values.clientCountry}
                clientCity={values.clientCity}
                clientPostalCode={values.clientPostalCode}
                clientAddress={values.clientAddress}
              />

              <InvoiceDetails
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                projectDescription={values.projectDescription}
                invoiceDate={values.invoiceDate}
                paymentTerms={values.paymentTerms}
              />

              <AddItems
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-2">
            <Preview {...values} />
          </div>
        </div>
      </form>
    </>
  );
};

export default InvoiceForm;
