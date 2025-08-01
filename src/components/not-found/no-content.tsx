export function NoContentComponent() {
  return (
    <div className="m-4 flex flex-col">
      <p className="mb-2 font-body text-sm font-medium text-primary">
        204 - No content
      </p>
      <h1 className="mb-4 font-heading text-2xl font-bold text-gray-800 dark:text-white">
        Oops!
      </h1>
      <p className="font-body text-gray-500 dark:text-gray-400">
        Looks like this page was not supposed to be empty, but it is.
      </p>
    </div>
  )
}
