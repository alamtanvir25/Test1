export default function Container ({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          padding: 20px;
          background-color:black
          border-radius:10 px;
        }
      `}</style>
    </div>
  )
}