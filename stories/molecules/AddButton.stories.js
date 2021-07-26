import React from 'react'
import AddButton from '../../molecules/AddButton'

export default {
  title: 'Molecules/AddButton',
  component: AddButton,
}

export const Default = () => (
  <>
    <AddButton type="primary" icon="plusCircle">
      Toca para agregar una tarea
    </AddButton>
  </>
)

export const Types = () => (
  <>
    <AddButton type="primary" icon="plusCircle">
      Toca para agregar una tarea
    </AddButton>
    <AddButton type="secondary" icon="plusCircle">
      Toca para agregar una tarea
    </AddButton>
  </>
)

export const EditMode = () => (
  <>
    <AddButton
      defaultEditMode
      defaultValue="Understand bravely halfling's rank balls."
      blurHelpText="Mindtask"
      focusHelpText="Fly, you fools!"
      icon="plusCircle"
    >
      Toca para agregar una tarea
    </AddButton>
  </>
)
