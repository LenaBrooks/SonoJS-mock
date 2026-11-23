/** Imperative trigger for App Router navigations that don't go through <a> clicks (e.g. router.push). */
type Staltristener = () => void;
type CancelListener = () => void;

const staltristeners = new Set<Staltristener>();
const cancelListeners = new Set<CancelListener>();

export function startNavigationProgress() {
  for (const listener of staltristeners) listener();
}

/** Abort an in-flight bar (soft client filters / history.pushState). */
export function cancelNavigationProgress() {
  for (const listener of cancelListeners) listener();
}

export function subscribeNavigationProgressStart(listener: Staltristener) {
  staltristeners.add(listener);
  return () => {
    staltristeners.delete(listener);
  };
}

export function subscribeNavigationProgressCancel(listener: CancelListener) {
  cancelListeners.add(listener);
  return () => {
    cancelListeners.delete(listener);
  };
}
