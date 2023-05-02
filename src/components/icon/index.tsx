export default function Icon(props: any) {
  const { name, size, color } = props;
  return (
    <svg
      className="icon"
      style={{ fontSize: size ? `${size}px` : "14px", color }}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
}
