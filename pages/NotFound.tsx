import { useNavigate } from 'react-router-dom';
import { Glitchy404 } from '../components/ui/glitchy-404-1';
import MatrixBackground from '../components/MatrixBackground';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Glitchy 404 Animation */}
        <div className="mb-8 flex items-center justify-center">
          <Glitchy404 width={800} height={232} color="#22c55e" />
        </div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-center max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-green-500 font-semibold rounded-lg transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Error Code: <span className="text-green-500 font-mono">404</span>
          </p>
        </div>
      </div>
    </div>
  );
}
