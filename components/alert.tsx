import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({
  children,
  type
}: {
  children: React.ReactNode
  type: string
}) {
  return (
    <div
      className={ `${styles.center} ${cn({
        [styles.success]: type === 'success',
        [styles.warning]: type === 'warning',
        [styles.error]: type === 'error',
      })}
      `}
    >
      {children}
    </div>
  );
}
