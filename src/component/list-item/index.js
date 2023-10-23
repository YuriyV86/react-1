import "./index.css";

export default function ListItem({
  children,
  imageSrc,
  title,
  disabled = false,
}) {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon"></img>}

      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}

        <div className={`list-item__content ${disabled ? "disabled" : ""}`}>
          {children}
        </div>
      </div>
    </li>
  );
}
