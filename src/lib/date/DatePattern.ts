/**
 * https://date-fns.org/v2.19.0/docs/format
 */
export enum DatePattern {
  /**
   * 23:59
   */
  TIME = 'HH:mm',

  /**
   * 31.12 23:59
   */
  DAY_MONTH_TIME = 'dd.MM HH:mm',

  /**
   * 31.12.2021 23:59
   */
  DAY_MONTH_YEAR_TIME = 'dd.MM HH:mm',

  /**
   * 2021-02-02
   */
  DATE_ISO = 'yyyy-MM-dd',

  /**
   * 2021-05-26T17:49:49
   */
  DATE_TIME_ISO = `yyyy-MM-dd'T'HH:mm:ss`,
}
