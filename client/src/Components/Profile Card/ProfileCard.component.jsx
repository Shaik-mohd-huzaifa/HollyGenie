import "./ProfileCard.styles.scss";

export const ProfileCard = ({name, image, age, budget, genes, moviecount}) => {
    return (
        <div className="ProfileCard">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Budget: {budget}</p>
            <p>Movie Types: {genes}</p>
            <p>Total Movies: {moviecount}</p>
        </div>
    )
}