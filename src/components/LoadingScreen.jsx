export default function LoadingScreen({ done }) {
  return <div className={`loading-screen ${done ? 'hidden' : ''}`}><div className="loader"></div></div>;
}
