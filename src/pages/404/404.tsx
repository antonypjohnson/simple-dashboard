import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="text-center">
        <p className="text-base font-semibold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-neutral-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <button type="button" className="button secondary large">
              <div className="flex gap-2 items-center">Go back home</div>
            </button>
          </Link>

          <a href="#" className="text-sm font-semibold text-neutral-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};
