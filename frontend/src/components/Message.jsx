import { Alert } from "react-bootstrap";

// Variant is for success or red for alert
const Message = ({ variant, children }) => {
	return <Alert variant={variant}>{children}</Alert>;
};


Message.defaultProps = {
  variant: 'info'
}
export default Message;
