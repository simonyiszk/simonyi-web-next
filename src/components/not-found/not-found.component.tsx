/* eslint-disable react/no-unescaped-entities */
export function NotFoundComponent() {
  return (
    <div className="flex flex-col m-4">
      <p className="text-sm font-medium text-simonyi_zold mb-2 font-body">404 error</p>
      <h1 className="font-heading text-2xl font-bold mb-4 text-gray-800 dark:text-white">We can't find that page</h1>
      <p className="font-body text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>
    </div>
  );
}
