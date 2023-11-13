import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="bg-primary h-screen w-screen flex items-center justify-center snap-center flex-col">
        <div className="animate-fade-right animate-once animate-ease-in-out text-secondary text-7xl align-text-top mb-10">
          <h1>Contact</h1>
        </div>
        <div className="flex-col w-1/6">
          <form className="mt-8 flex flex-col">
            <label className="block mb-2 text-sm  text-secondary">Name</label>
            <input
              type="text"
              className="form-input w-48 rounded-md shadow-sm  "
            />

            <label className="block mb-2 mt-4 text-sm  text-secondary">
              Email address
            </label>
            <input
              type="email"
              className="form-input w-48 rounded-md shadow-sm "
            />

            <label className="block mb-2 mt-4 text-sm text-secondary">
              Message
            </label>
            <textarea
              className="form-textarea w-64 h-24 rounded-md shadow-sm "
              rows="3"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
