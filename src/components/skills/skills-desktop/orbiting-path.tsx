export interface OrbitPathProps {
  size: number; // % of parent, both width and height
}

export default function OrbitPath({ size }: OrbitPathProps) {
  return (
    <div
      style={{ height: `${size}%`, width: `${size}%` }}
      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
    />
  );
}
