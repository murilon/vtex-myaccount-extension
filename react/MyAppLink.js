import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const MyAppLink = ({ render, intl }) => {
  return render([
    {
      name: intl.formatMessage({ id: 'vtex.store-messages@0.x::pages.addresses' }),
      path: '/_addresses',
    },
  ])
}

MyAppLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(MyAppLink)
