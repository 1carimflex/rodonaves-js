/* eslint-disable max-classes-per-file */

/**
 * @class
 * @augments {Error}
 */
class AxiosTestError extends Error {
  constructor({
    message = 'Axios Test Error',
    config = '',
    code = '',
    request = '',
    response = '',
  }) {
    super(message);

    this.config = config;
    if (code) {
      this.code = code;
    }
    this.request = request;
    this.response = response;
    this.isAxiosError = true;
  }
}

/**
 * @class
 * @alias module:rodonaves-js
 * @augments Error
 */
class RodonavesFetchServerError extends Error {
  /**
   * Creates an instance of RodonavesFetchServerError.
   *
   * @param {string} status Status Code passed from the server
   * @memberof RodonavesFetchServerError
   */
  constructor(status) {
    super(`Server error status ${status} `);
    this.name = 'RodonavesFetchServerError';
  }
}

/**
 * @class
 * @alias module:rodonaves-js
 * @augments Error
 */
class RodonavesFetchClientError extends Error {
  /**
   * Creates an instance of RodonavesFetchClientError.
   *
   * @memberof RodonavesFetchClientError
   */
  constructor() {
    super('Client error');
    this.name = 'RodonavesFetchClientError';
  }
}

/**
 * @class
 * @alias module:rodonaves-js
 * @augments Error
 */
class RodonavesFetchOtherError extends Error {
  /**
   * Creates an instance of RodonavesFetchOtherError.
   *
   * @memberof RodonavesFetchOtherError
   */
  constructor() {
    super('Other Error');
    this.name = 'RodonavesFetchOtherError';
  }
}

export {
  AxiosTestError,
  RodonavesFetchServerError,
  RodonavesFetchClientError,
  RodonavesFetchOtherError,
};
