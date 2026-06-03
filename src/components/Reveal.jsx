import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useScrollAnimation(0.15);
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
