export default function Spinner(props) {
  return (
    <div
      className={`animate-spin inline-block w-${props.width} h-${props.height} border-[3px] border-current border-t-transparent text-white rounded-full`}
      role="status"
      aria-label="loading"
    ></div>
  );
}
