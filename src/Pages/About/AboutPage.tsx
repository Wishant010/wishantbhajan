import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import AboutNavbar from "../../components/AboutNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";
import BentoHero from "../../components/BentoHero/BentoHero";
import NeuroBackground from "../../components/Background/NeuroBackground";

// Error fallback component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-400 mb-4">Er ging iets mis</h1>
        <p className="text-slate-300 mb-4">
          Er is een fout opgetreden bij het laden van de pagina.
        </p>
        <pre className="text-xs text-slate-400 bg-slate-800 p-4 rounded overflow-auto">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Probeer opnieuw
        </button>
      </div>
    </div>
  );
}

const AboutPage: React.FC = () => {
  const [backgroundError, setBackgroundError] = React.useState(false);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-slate-900 relative overflow-hidden" data-page="about">
        {/* Full-page Neuro Background */}
        <div className="fixed inset-0 z-0">
          {!backgroundError ? (
            <ErrorBoundary
              fallback={
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/80 to-purple-950/60" />
              }
              onError={() => setBackgroundError(true)}
            >
              <NeuroBackground hue={200} saturation={0.8} chroma={0.6} />
            </ErrorBoundary>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/80 to-purple-950/60" />
          )}
        </div>

        {/* Content wrapper with relative positioning */}
        <div className="relative z-10">
          <AboutNavbar />

          {/* Bento Hero Section */}
          <BentoHero />

          {/* Contact Bar */}
          <ContactBar />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AboutPage;
