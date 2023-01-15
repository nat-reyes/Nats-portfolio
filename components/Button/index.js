import btnStyle from '../../styles/Button.module.scss';
function Button({ children }) {
  return <button className={btnStyle.button}>{children} </button>;
}

export default Button;
