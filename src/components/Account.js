const Account = (props) => {
  const background =
    props.index % 2 === 0
      ? { backgroundColor: "white" }
      : { backgroundColor: "#F7F7F7" };

  const { amount } = props;
  const value = amount.toLocaleString("fr");
  return (
    <div className="transaction-line" style={background}>
      <div className="date">
        <p>{props.date}</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="amount">
        <p>{value} €</p>
      </div>
    </div>
  );
};

export default Account;
