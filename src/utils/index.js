export const requireLogin = (store, requiredLogin = false, redirectPath = '/', replace, cb) => {
  if (store) {
    const { auth } = store.getState();
    if (auth.get('authenticated') !== requiredLogin) {
      // oops, not logged in, so can't be here!
      replace(redirectPath);
    }
  }
  cb();
};
