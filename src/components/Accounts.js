import Account from "./Account";
import Button from "./Button";

const Accounts = (props) => {
  const { balance } = props;
  const value = balance.toLocaleString("fr");
  return (
    <div className="container">
      <div className="account">
        <div
          className="account-header"
          style={{ backgroundColor: props.color }}
        >
          <h2>{props.name}</h2>
          <h2>{value} €</h2>
        </div>
        <div className="account-transactions">
          {props.operations.map((elem, index) => {
            return (
              <Account
                key={index}
                date={elem.date}
                description={elem.description}
                amount={elem.amount}
                index={index}
              />
            );
          })}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Accounts;
