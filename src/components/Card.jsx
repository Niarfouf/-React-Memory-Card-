export default function Card({
    order,
    pokemonId,
    pokemonName,
    imgUrl,
    handleScore,
}) {
    return (
        <div
            className="card"
            style={{ order: order }}
            onClick={() => handleScore(pokemonId)}
        >
            <img
                className="pokemon-sprite"
                alt={pokemonName}
                src={imgUrl}
            ></img>
            <h3 className="pokemon-name">
                {pokemonName.search('-') == -1
                    ? pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
                    : pokemonName.charAt(0).toUpperCase() +
                      pokemonName.slice(1, pokemonName.search('-'))}
            </h3>
        </div>
    )
}
