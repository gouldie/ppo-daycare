import React from 'react'
import JobEditForm from './JobEditForm'
import JobDeleteForm from './JobDeleteForm'

export const Job = (props) => {
  const {
    id,
    owner,
    pokemon,
    startLevel,
    endLevel,
    exp,
    cost,
    notes,
    handleDelete,
    handleEdit } = props;

  return (
    <tr>
      <td>{owner || '--'}</td>
      <td>{pokemon || '--'}</td>
      <td>{startLevel}</td>
      <td>{endLevel}</td>
      <td>{exp}</td>
      <td>${cost}</td>
      <td style={{maxWidth: '100px', overflow: 'hidden'}}>{notes|| '--'}</td>
      <td className='set-width'>
        <span
          className="glyphicon glyphicon-edit span-padding-right"
          aria-hidden="true"
          data-toggle = "modal"
          data-target={"#modal" + id}
          ></span>
        <span
          className="glyphicon glyphicon-remove"
          aria-hidden="true"
          data-toggle = "modal"
          data-target={"#modaldel" + id}
          ></span>
        <JobEditForm
          id={id}
          owner={owner}
          pokemon={pokemon}
          startLevel={startLevel}
          endLevel={endLevel}
          exp={exp}
          cost={cost}
          notes={notes}
          handleEdit={handleEdit} />
        <JobDeleteForm
          id={id}
          handleDelete={handleDelete} />
      </td>
    </tr>
  )
}
