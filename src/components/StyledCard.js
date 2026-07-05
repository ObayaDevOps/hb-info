export default function StyledCard({ children, className = '', style = {}, ...rest }) {
  return (
    <div
      className={`card-lift ${className}`}
      style={{
        backgroundColor: '#fff7e1',
        border: '2px solid #000819',
        borderRadius: '0.5rem',
        boxShadow: '0px 4px 8px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)',
        overflow: 'hidden',
        height: '100%',
        marginLeft: '8px',
        marginRight: '8px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-hanken)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
