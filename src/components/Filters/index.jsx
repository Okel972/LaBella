export const Filters = () => {
  return (
    <div className="filters">
      <div className="filter">
        <label htmlFor="filter">Filtrer par :</label>
        <select name="filter" id="filter">
          <option value="prix">Prix</option>
          <option value="nom">Nom</option>
        </select>
      </div>
    </div>
  );
};
