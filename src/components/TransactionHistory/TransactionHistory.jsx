import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';
import {
  History,
  TableHead,
  TableHeadItem,
  TableBodyList,
  TableBodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <History>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyList key={id}>
            <TableBodyItem>{type}</TableBodyItem>
            <TableBodyItem>{amount}</TableBodyItem>
            <TableBodyItem>{currency}</TableBodyItem>
          </TableBodyList>
        ))}
      </tbody>
    </History>
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
