import scss from "./selection.module.scss";
const Selection = () => {
  return (
    <div className={scss.filters}>
      <select>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
      </select>
      <select>
        <option value="">specialization</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
      </select>
      <select>
        <option value="">Сountries</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
        <option value="">Higher Education</option>
      </select>
    </div>
  );
};

export default Selection;
