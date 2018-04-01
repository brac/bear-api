// jshint asi:true

const client = require('./client')

const list = () => {
  return client.query('SELECT * FROM bears ORDER BY id').then(
    queryResults => queryResults.rows,
    error => { throw new Error(`Error during list query: ${error}`) }
  )
}

const create = (name) => {
  if (!name) {
    return Promise.reject(new Error('Please provide a bear name'))
  }

  return client.query(
    `
    INSERT INTO
      bears (name)
    VALUES
      ($1)
    RETURNING
      *
    `,
    [name]
  ).then(
    results => results.rows[0],
    error => { throw new Error(`Error during add bear: ${error}`) }
  )
}

const listSingle = (id) => {
  return client.query(
    `
    SELECT
      *
    FROM
      bears
    WHERE
      id = $1
    `, [id]
  ).then(
    results => results.rows[0],
    error => { throw new Error(`Error during query: ${error}`)}
  )
}

const deleteBear = (id) => {
  return client.query(
    `
    DELETE
    FROM
      bears
    WHERE
      id = $1
    `, [id]
  ).then(
    () => `deleted bear with id: ${id}`,
    error => { throw new Error(`Error during delete: ${error}`)}
  )
}

module.exports = {
  list,
  create,
  listSingle,
  deleteBear
}