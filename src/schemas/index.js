import * as Yup from "yup";

export const invoiceSchema = Yup.object().shape({
  company_name: Yup.string()
    .min(2)
    .max(25)
    .required("Company Name is required."),
  company_email: Yup.string().email().required("Company Email is required"),
  country: Yup.string().min(2).max(25).required("Country is required"),
  city: Yup.string().min(2).max(25).required("City is required"),
  postal_code: Yup.number()
    .positive()
    .integer()
    .required("Postal code is required"),
  street_address: Yup.string()
    .min(2)
    .max(60)
    .required("Street address is required"),

  clientName: Yup.string().min(2).max(25).required("Client Name is required."),
  clientEmail: Yup.string().email().required("Client Email is required"),
  clientCountry: Yup.string().min(2).max(25).required("Country is required"),
  clientCity: Yup.string().min(2).max(25).required("City is required"),
  clientPostalCode: Yup.number()
    .positive()
    .integer()
    .required("Postal code is required"),
  projectDescription: Yup.string()
    .min(5)
    .required("Project Details are required"),
  clientAddress: Yup.string()
    .min(2)
    .max(60)
    .required("Street address is required"),
  paymentTerms: Yup.string().required("Payment Terms are required"),

  items: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string().required("Item name is required"),
      qty: Yup.number()
        .required("QTY is required")
        .min(1, "QTY cannot be less than 1"),
      price: Yup.number()
        .required("Price is required")
        .min(1, "Price cannot be less than 1"),
    })
  ),
});
