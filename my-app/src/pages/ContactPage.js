import WomenDesigner from "../images/woman-interior-designer_5.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send email. Please try again.");
      }
    );
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center h-screen mt-16 bg-customGray">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex justify-center items-center">
          <img
            className="h-64 md:h-96 w-64 md:w-96 mb-1 rounded-full shadow-2xl"
            src={WomenDesigner}
            alt="woman designer"
          />
        </div>
        <div className="bg-white my-6 p-8 rounded shadow-lg ">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              phoneNumber: "",
              email: "",
              location: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form onSubmit={sendEmail}>
                <div className="my-4">
                  <p className="text-2xl">
                    <p>{t("contactPage.title")}</p>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                      {t("contactPage.name")}
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="surname" className="block text-gray-700">
                      {t("contactPage.surname")}
                    </label>
                    <Field
                      name="surname"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded"
                    />
                    <ErrorMessage
                      name="surname"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700"
                    >
                      {t("contactPage.phoneNumber")}
                    </label>
                    <Field
                      name="phoneNumber"
                      type="text"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                      {t("contactPage.email")}
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-stone-600 text-white px-4 py-2 rounded hover:bg-stone-400"
                >
                  {t("global.submit")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
