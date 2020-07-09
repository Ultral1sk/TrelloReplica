import React from 'react'

class ErrorBoundary extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              // checks if an error has occured in its children.
              hasError: false
          }
      }

      static getDerivedStateFromError(error) {
            return { hasError: true }
        }

      render() {
          if(this.state.hasError) {
              // if the hasError state boolean is true, it returns this to tell the user an error has occurred
              return (
                  <div>Error occurred.</div>
              )
          } else {
              // if there is no error the children components are returned so there are rendered.
              return this.props.children
          }
      }
}

export default ErrorBoundary