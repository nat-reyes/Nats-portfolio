import cardStyle from '../../styles/CardContainer.module.scss';

function Card({ children, title }) {
  return <div className={cardStyle.cardContainer}>
    {title && <div className={cardStyle.cardTitle}>
      <span>{title}</span>
      <div className={cardStyle.divider} />
    </div>}
    {children}
  </div>;
}

export default Card;
