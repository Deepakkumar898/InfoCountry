import "./contact.css";
export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const inputFormData = Object.fromEntries(formData.entries());
    console.log(inputFormData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            autoCapitalize="false"
            placeholder="Enetr your name"
            name="username"
          />
          <input
            type="email"
            autoCapitalize="false"
            placeholder="Enetr your email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            autoCapitalize="false"
            placeholder="Enetr your message"
            name="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
