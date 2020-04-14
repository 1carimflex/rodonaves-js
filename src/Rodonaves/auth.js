/**
 * **FOR INTERNAL USE** - 🔑 Get token. Used for other functions to put token in header
 *
 * @alias module:rodonaves-js#Rodonaves.auth
 * @instance
 * @returns {Promise.<boolean, (Error)>} True response credentials are ok, or an error if rejected.
 */
export default async function auth() {
  const data = await this.fetch('/token', 'POST', undefined, {
    auth_type: this.mode,
    grant_type: 'password',
    username: this.username,
    password: this.password,
  });

  this.token = data.access_token;
  return true;
}
