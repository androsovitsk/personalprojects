interface IActionButton {
  label: string
  hidden?: boolean
  onClick?: (...args) => void
}

export default IActionButton
