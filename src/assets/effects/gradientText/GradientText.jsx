import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#4fc96fff', '#2c58ce', '#2ea04c', '#2c58ce', '#4fc96fff'],
  animationSpeed = 4,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
