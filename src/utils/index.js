import _ from 'lodash'

/**
 * @param {string} prefix
 */
export const generateUniqueId = prefix => {
  return _.uniqueId(`${prefix ? prefix + '-' : ''}${_.random(1e14, 1e15-1).toString(16)}-`)
}