import { BackgroundLines } from '../../ui/background-lines.tsx';
import './LandingPage.scss';

export function BackgroundLinesDemo() {
  return (
    <div className="landingpage-section relative z-10 bg-white dark:bg-black text-black dark:text-white">
      <BackgroundLines className="absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 pt-32 pb-24 text-center">
        <h2 className="bg-clip-text name-content text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Jobiny Johnson
        </h2>
        <p className="max-w-xl position-content mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Senior Frontend Developer
        </p>
      </div>
    </div>
  );
}
