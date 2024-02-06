import React from 'react'
/**
 * Dynamically imports a React component using `React.lazy` and a promise-based factory function.
 * This function facilitates code-splitting by encapsulating the `React.lazy` call within a utility
 * function that dynamically imports a module and extracts a specific named export from that module.
 *
 * @template T - The type constraint for the React component being imported. It extends `React.ComponentType<unknown>`
 *               to ensure the imported component is a valid React component type.
 * @template I - The interface representing the module's exports, where the component name (`K`) is mapped to its type (`T`).
 * @template K - The type of the key representing the named export in the module. It extends `keyof I` to ensure
 *               the name corresponds to one of the module's exports.
 *
 * @param {() => Promise<I>} factory - A function that returns a promise resolving to the module object (`I`). This
 *                                     module object should contain at least the named export specified by `name`.
 * @param {K} name - The name of the export to dynamically import from the module. This name must match one of the keys
 *                   in the module's export interface `I`.
 *
 * @returns {I} An object created with `Object.create()` that mimics the structure of the module's exports, but with the
 *              specified named export being a lazy-loaded React component. This enables dynamic import of the component
 *              with code-splitting support.
 *
 * @example
 * // Usage example for dynamically importing a `Home` component from './Home' module.
 * const { Home } = lazyImport(() => import("./Home"), "Home");
 */
export function lazyImport<T extends React.ComponentType<unknown>, I extends { [K2 in K]: T }, K extends keyof I>(
  factory: () => Promise<I>,
  name: K
): I {
  return Object.create({
    [name]: React.lazy(() => factory().then((module) => ({ default: module[name] }))),
  })
}
