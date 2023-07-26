import './Card.css'

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export function CardWrapper(props) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
}

export const Card = (props) => {
    return (
        <div>
            <div className={`card-${props.cardType}`}>
                {props.cardType === CardType.FIRST && (
                    <div>
                        <div>{props.picture}</div>
                        <div className="card-text">{props.text}</div>
                    </div>
                )}
                {props.cardType === CardType.SECOND && (
                    <div>
                        <div className="card-picture">{props.picture}</div>
                        <div className="card-title__block card-title">{props.text}</div>
                    </div>
                )}
                {props.cardType === CardType.THIRD && (
                    <div>
                        <div className='card-icon'>{props.icon}</div>
                        <div className="card-title">{props.title}</div>
                        <div className="card-subtitle">{props.subtitle}</div>
                        <div className="card-text">{props.text}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
