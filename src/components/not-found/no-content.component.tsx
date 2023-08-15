/* eslint-disable react/no-unescaped-entities */
export function NoContentComponent() {
  return (
    <div className="flex flex-col m-4">
      <p className="text-sm font-medium text-simonyi_zold mb-2 font-body">204 - No content</p>
      <h1 className="font-heading text-2xl font-bold mb-4 text-gray-800 dark:text-white">Oops!</h1>
      <p className="font-body text-gray-500 dark:text-gray-400">Looks like this page was not supposed to be empty, but it is.</p>
    </div>
  );
}
