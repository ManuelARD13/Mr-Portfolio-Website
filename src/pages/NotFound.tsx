function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__icon">404</div>
      <div className="not-found__title">
        <h1 >Looks like you got lost!</h1>
      </div>
      <div className="not-found__sub-text">
        <p>The page you are looking for does not exist</p>
      </div>
      <div className="not-found__btn">
        <button onClick={() => (location.href = "/")}>Go back home!</button>
      </div>
    </section>
  );
}

export default NotFound;
