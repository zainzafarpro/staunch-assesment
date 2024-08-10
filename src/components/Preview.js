import { useEffect, useState } from "react";
import { resource } from "../schemas/locales";

const Preview = ({
  city,
  company_email,
  company_name,
  country,
  postal_code,
  street_address,
  clientName,
  clientEmail,
  clientCountry,
  clientCity,
  clientPostalCode,
  projectDescription,
  invoiceDate,
  paymentTerms,
  items,
}) => {
  const [total, setTotal] = useState();
  const [subTotal, setSubTotal] = useState();

  // Calculate subtotal and total
  useEffect(() => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += item.price * item.qty;
    });
    setSubTotal(subtotal);

    const taxRate = 0.1; // 10% tax rate
    const taxAmount = subtotal * taxRate;
    const newTotal = subtotal + taxAmount;
    setTotal(newTotal);
  }, [items]);

  const date = new Date(invoiceDate);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#F5F5F5] rounded-3xl md:py-8 md:px-6 p-4 h-full">
      <h2 className="mb-4 text-lg md:text-2xl font-bold">
        {resource.title.preview}
      </h2>
      <div className="bg-white rounded-xl py-6 px-4 shadow-lg from-black">
        <h3 className="border-b-gray-200 border-b-[1px] pb-2 mb-6 text-lg font-bold">
          {resource.title.newInvoice}
        </h3>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 min-h-16 mb-8">
            <h4 className="mb-2 text-[#76787D]">{resource.text.invoicetxt}</h4>
            <div>{formattedDate}</div>
          </div>
          <div className="w-full md:w-6/12 min-h-16 mb-8">
            <h4 className="mb-2 text-[#76787D]">
              {resource.text.paymentTerms}
            </h4>
            <div>
              {paymentTerms
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/^./, (match) => match.toUpperCase())}
            </div>
          </div>
          <div className="w-full md:w-6/12 min-h-16 mb-8 md:mb-0">
            <h4 className="mb-2 text-[#76787D]">{resource.title.billFrom}</h4>
            <div>{company_name}</div>
            <div>{company_email}</div>
            <div>{street_address}</div>
            <div>{`${city} ${postal_code}`}</div>
            <div>{country}</div>
          </div>
          <div className="w-full md:w-6/12 min-h-16 mb-8 md:mb-0">
            <h4 className="mb-2 text-[#76787D]">{resource.title.billTo}</h4>
            <div>{clientName}</div>
            <div>{clientEmail}</div>
            <div>{`${clientCity} ${clientPostalCode}`}</div>
            <div>{clientCountry}</div>
          </div>
          <div className="w-full mt-8">
            <h4 className="mb-2 text-[#76787D]">{resource.text.projectDesp}</h4>
            <p>{projectDescription}</p>
          </div>
        </div>
        <table className="table-fixed w-full mt-8 border-b-gray-300 border-b-[1px] mb-8">
          <thead className="bg-[#F5F5F5]">
            <tr className="[&_th]:font-normal text-left [&_th]:px-4 [&_th]:py-2">
              <th colSpan={2}>{resource.text.item}</th>
              <th colSpan={1}>{resource.text.qty}</th>
              <th colSpan={1}>{resource.text.price}</th>
              <th colSpan={2} className="text-right">
                {resource.text.totalAmount}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="[&_td]:px-4 [&_td]:py-2">
                <td colSpan={2}>{item.itemName}</td>
                <td colSpan={1}>{item.qty}</td>
                <td colSpan={1}>{item.price ? "$ " + item.price : null}</td>
                <td className="text-right" colSpan={2}>
                  {item.total ? "$ " + item.total : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <div className="w-full md:w-5/12">
            <ul className="list-none [&_li]:flex [&_li]:justify-between [&_li]:mb-3 [&_li_span]:font-semibold">
              <li>
                <strong>{resource.text.subTotal}</strong>
                <span>{subTotal ? "$ " + subTotal : ""}</span>
              </li>
              <li>
                <strong>{resource.text.tax}</strong>
                <span>{resource.text.taxpercent}</span>
              </li>
              <li className="text-xl">
                <strong>{resource.text.total}</strong>
                <span className="font-bold">{total ? "$ " + total : ""}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
