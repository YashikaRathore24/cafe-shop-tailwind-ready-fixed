import "./reservation.css";

const Reservation = () => {
  return (
    <section id="reservation" className="reservation">
      <h2 className="section-title">Reserve a Table</h2>

      <form className="reserve-form">
        <input type="text" placeholder="Your Name" required />
        <input type="date" required />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Reservation;
