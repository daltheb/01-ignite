export function RepositoryItem(props: any) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.link}>Acessar repositorio</a>
    </li>
  )
}
