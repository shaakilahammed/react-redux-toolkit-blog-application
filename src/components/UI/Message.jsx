import PropTypes from 'prop-types';
const Message = ({ children = 'Something went wrong!' }) => {
  return <div>{children}</div>;
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
