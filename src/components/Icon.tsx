import { IconProps } from '@/types/components.types';

export default function Icon({ name, className = '' }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
