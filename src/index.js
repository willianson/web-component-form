import React from 'react';

function Form({ etapas }) {
  return <div>{etapas || 'Nenhuma etapa informada.'}</div>;
}

export default Form;