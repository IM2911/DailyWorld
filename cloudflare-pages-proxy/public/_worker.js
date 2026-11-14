// Forwards every request for dailyworld.pages.dev to the "dailyworld" Worker
// through the SITE service binding (see ../wrangler.toml).
export default {
  fetch(request, env) {
    return env.SITE.fetch(request);
  },
};
