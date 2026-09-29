import { useState } from "react";

const INITIAL_VALUES = { name: "", email: "", message: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 500;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "El nombre es obligatorio.";

  if (!values.email.trim()) errors.email = "El email es obligatorio.";
  else if (!EMAIL_REGEX.test(values.email)) errors.email = "El email no tiene un formato válido.";

  if (values.message.trim().length < 10) errors.message = "El mensaje debe tener al menos 10 caracteres.";

  return errors;
}

function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSent(true);
    setValues(INITIAL_VALUES);
  };

  return (
    <section id="contacto" className="section">
      <p className="section-label">// 07 — contacto</p>
      <h2 className="section-title">Hablemos<em>.</em></h2>

      {sent ? (
        <div className="form-success" role="status">
          <p>¡Gracias! Tu mensaje se ha enviado correctamente.</p>
          <button type="button" className="btn" onClick={() => setSent(false)}>Enviar otro mensaje</button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" maxLength={MAX_MESSAGE} value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)}></textarea>
            <div className="form-meta">
              {errors.message ? <p className="form-error">{errors.message}</p> : <span></span>}
              <span className="form-counter">{values.message.length}/{MAX_MESSAGE}</span>
            </div>
          </div>

          <button type="submit" className="btn">Enviar mensaje</button>
        </form>
      )}
    </section>
  );
}

export default Contact;