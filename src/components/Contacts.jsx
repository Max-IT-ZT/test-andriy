// Contact.js
function Contact() {
  return (
    <section id="contact">
      <h2>Контакти</h2>
      <form>
        <label>Ім`я</label>
        <input type="text" name="name" required />
        <label>Номер телефону</label>
        <input type="tel" name="phone" required />
        <label>Повідомлення</label>
        <textarea name="message" required></textarea>
        <button type="submit">Надіслати</button>
      </form>
      <div className="contact-info">
        <p>
          Телефон: <a href="tel:+380XXXXXXXXX">+380XXXXXXXXX</a>
        </p>
        <p>
          Telegram: <a href="https://t.me/username">Мій Telegram</a>
        </p>
        <p>
          Viber: <a href="viber://chat?number=+380XXXXXXXXX">Мій Viber</a>
        </p>
        <p>
          Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
