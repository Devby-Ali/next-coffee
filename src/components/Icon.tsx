interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = ''}: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
