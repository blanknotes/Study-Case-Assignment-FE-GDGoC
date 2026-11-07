export function Spinner() {
    return (
        <div className="flex justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
    )
}

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="rounded-lg border border-red-300 p-4 text-center">
      <p className="mb-3 text-sm text-red-600">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="rounded bg-red-500 px-4 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}

export function EmptyState({
  text = "There is no available data."
}) {
  return (
    <div className="rounded-lg border p-4 text-center">
      <p className="text-sm text-gray-500">
        {text}
      </p>
    </div>
  );
}