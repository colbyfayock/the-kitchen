import Link from 'next/link';

import styles from './Card.module.scss';

const Card = ({ children, className, href, ...rest }) => {
  let cardClassName = styles.card;

  if ( className ) {
    cardClassName = `${cardClassName} ${className}`;
  }

  if ( href ) {
    return (
      <Link href={href}>
        <a className={cardClassName} {...rest}>
          { children }
        </a>
      </Link>
    )
  }

  return (
    <div {...rest} className={cardClassName} >
      { children }
    </div>
  )
}

export default Card;