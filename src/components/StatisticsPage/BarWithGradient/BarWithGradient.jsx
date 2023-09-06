import uniqueNumberGenerator from '../../../utilities/uniqueNumberGenerator';

const getPath = (x, y, width, height, radius) => {
  return `M ${x},${y} 
           L ${x},${y + height - radius}
           C ${x} ${y + height} ${x} ${y + height} ${x + radius} ${y + height}
           L ${x + width - radius}, ${y + height}
           C ${x + width} ${y + height} ${x + width} ${y + height} ${
    x + width
  } ${y + height - radius}
           L ${x + width},${y} 
           Z`;
};

const BarWithGradient = props => {
  const { fill, x, y, width, height, radius } = props;

  const id = uniqueNumberGenerator();

  return (
    <>
      <defs>
        <linearGradient id={id} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: fill, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: fill, stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path
        d={getPath(x, y, width, height, radius)}
        stroke="none"
        fill={`url(#${id})`}
      />
    </>
  );
};

export default BarWithGradient;
