import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ServiceSchema = Yup.object().shape({
  serviceType: Yup.string().required('Service Type is required'),
  deviceId: Yup.string().required('Device ID is required'),
  customerName: Yup.string().required('Customer Name is required'),
  customerMobile: Yup.string().required('Customer Mobile is required'),
  serviceCost: Yup.number().positive('Service Cost must be positive').required('Service Cost is required'),
});

function ServiceForm({ onClose }) {
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
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Service</h3>
          <Formik
            initialValues={{ serviceType: '', deviceId: '', customerName: '', customerMobile: '', serviceCost: '' }}
            validationSchema={ServiceSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mt-2">
                <div className="mb-4">
                  <Field name="serviceType" type="text" placeholder="Service Type" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.serviceType && touched.serviceType ? <div className="text-red-500 text-xs mt-1">{errors.serviceType}</div> : null}
                </div>
                <div className="mb-4">
                  <Field name="deviceId" type="text" placeholder="Device ID" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.deviceId && touched.deviceId ? <div className="text-red-500 text-xs mt-1">{errors.deviceId}</div> : null}
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
                <div className="mb-4">
                  <Field name="serviceCost" type="number" placeholder="Service Cost" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  {errors.serviceCost && touched.serviceCost ? <div className="text-red-500 text-xs mt-1">{errors.serviceCost}</div> : null}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Device Images</label>
                  <input type="file" multiple accept="image/*" className="mt-1 block w-full" />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Add Service
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <button onClick={onClose} className="mt-3 text-sm text-blue-600 hover:underline">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
