from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):
    handlers = {
        'ValidationError': _handle_validation_error,
        'Http404': _handle_404_error,
        'PermissionDenied': _handle_permission_error,
        'NotAuthenticated': _handle_authentication_error,
        'AuthenticationFailed': _handle_authentication_error,
        #'ValidationError': _handle_authentication_error,
    }
    response = exception_handler(exc, context)
    print(response)
    exception_class = exc.__class__.__name__
    print('---exception_class:', exception_class)
    if exception_class in handlers:
        return handlers[exception_class](exc, context, response)

def _handle_authentication_error(exc, context, response):
    response.data = {
        'status': 'error',
        'message': 'Please log in again.'
    }
    return response

def _handle_validation_error(exc, context, response):
    print('...',response.data)
    response.data = {
        'status': 'error',
        'message': "Validation errors"
    }
    return response

def _handle_permission_error(exc, context, response):
    print('...',response.data)
    response.data = {
        'status': 'error',
        'message': "You do not have permission."
    }
    return response

def _handle_404_error(exc, context, response):
    print('...',response.data)
    response.data = {
        'status': 'error',
        'message': "Item is not exist"
    }
    return response
