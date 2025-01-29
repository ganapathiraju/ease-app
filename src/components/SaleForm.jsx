import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SaleSchema = Yup.object().shape({
  saleItem: Yup.string().required('Sale Item is required'),
  price: Yup.number().positive('Price must be positive').required('Price is required'),
  customerName: Yup.string().required('Customer Name is required'),
  customerMobile: Yup.string().required('Customer Mobile is required'),
});

function SaleForm({ onClose }) {
  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would typically handle the form submission
    console.log(values);
    setSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Sale</h3>
          <Formik
            initialValues={{ saleItem: '', price: '', customerName: '', customerMobile: '' }}
            validationSchema={SaleSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mt-2">
                <div className="mb-4">
                  <Field name="saleItem" type="text" placeholder="Sale Item" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.saleItem && touched.saleItem ? <div className="text-red-500 text-xs mt-1">{errors.saleItem}</div> : null}
                </div>
                <div className="mb-4">
                  <Field name="price" type="number" placeholder="Price" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.price && touched.price ? <div className="text-red-500 text-xs mt-1">{errors.price}</div> : null}
                </div>
                <div className="mb-4">
                  <Field name="customerName" type="text" placeholder="Customer Name" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.customerName && touched.customerName ? <div className="text-red-500 text-xs mt-1">{errors.customerName}</div> : null}
                </div>
                <div className="mb-4">
                  <Field name="customerMobile" type="text" placeholder="Customer Mobile" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.customerMobile && touched.customerMobile ? <div className="text-red-500 text-xs mt-1">{errors.customerMobile}</div> : null}
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Add Sale
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <button onClick={onClose} className="mt-3 text-sm text-green-600 hover:underline">Close</button>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
