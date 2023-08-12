import './index.css'

const NotFound = () => (
  <div className="notFound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      className="image"
      alt="not found"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="paragraph">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
