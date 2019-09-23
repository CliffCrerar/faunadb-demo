export default ({ creditCard, firstName, loading, lastName, telephone }) => (
    <div className="table table-row">
      <p className={loading ? 'loading' : ''}>
        {firstName} {lastName}
      </p>{' '}
      <p className={`telephone ${loading ? 'loading' : ''}`}>{telephone}</p>
      <p className={`credit-card credit-card-number ${loading ? 'loading' : ''}`}>
        {creditCard && <img className="img-fluid visa-img" src="static/icons/visa.png" />}
        {creditCard}
      </p>
    </div>
  )