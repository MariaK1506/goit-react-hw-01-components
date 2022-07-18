import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableBodyList} key={id}>
            <td className={css.tableBodyItem}>{type}</td>
            <td className={css.tableBodyItem}>{amount}</td>
            <td className={css.tableBodyItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
