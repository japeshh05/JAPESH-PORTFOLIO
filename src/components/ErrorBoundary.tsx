import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg px-4 py-12 text-text-primary">
          <div className="max-w-md w-full glass-panel p-8 rounded-2xl text-center border border-surface-border shadow-cyan-glow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold font-heading mb-2 text-text-primary">
              Something went wrong
            </h1>
            <p className="text-text-secondary mb-6 text-sm">
              An unexpected display error occurred while rendering the page. Refresh the page to resume normal viewing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent-orange text-slate-950 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 shadow-amber-glow"
            >
              <RotateCcw className="w-4 h-4" />
              Refresh the page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

