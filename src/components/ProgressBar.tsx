// 進度指示器元件
interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return <div className="progress-bar" style={{ width: `${progress}%` }} />;
}
