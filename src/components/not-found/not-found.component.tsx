/* eslint-disable react/no-unescaped-entities */
export function NotFoundComponent() {
  return (
    <div className="m-4 flex flex-col">
      <p className="mb-2 font-body text-sm font-medium text-simonyi_zold">404 error</p>
      <h1 className="mb-4 font-heading text-2xl font-bold text-gray-800 dark:text-white">We can't find that page</h1>
      <p className="font-body text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>
    </div>
  );
}
