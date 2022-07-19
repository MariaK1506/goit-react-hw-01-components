import PropTypes from 'prop-types';
// import css from './Container.module.css';
import { WrapperContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};
